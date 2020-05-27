import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { marker } from './marker.image';
import { proj, View } from 'openlayers';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {MapsService} from '../../../services/maps.service';
import {LampeService} from '../../../services/lampe.service';
import {Lampadaire} from '../../../models/lampadaire.model';
import {LampadaireService} from '../../../services/lampadaire.service';
import {PositionModel} from '../../../models/PositionModel';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vo-ui-osm-view',
  templateUrl: './osm-view.component.html',
  styleUrls: ['./osm-view.component.css'],
  providers: [HttpClient, MapsService]
})
export class OsmViewComponent implements OnInit, OnDestroy {
  @Input()
      // tslint:disable-next-line:max-line-length
  geoReverseService = 'https://nominatim.openstreetmap.org/reverse?key=iTzWSiYpGxDvhATNtSrqx5gDcnMOkntL&format=json&addressdetails=1&lat={lat}&lon={lon}';

  @Input()
  width: string;
  @Input()
  height: string;

  @Input()
  latitude = 36.806389;
  @Input()
  longitude = 10.181667;
  point: PositionModel;
  @Input()
  latitudePointer = 36.806389;
  @Input()
  longitudePointer = 10.181667;

  @Input()
  showControlsZoom: boolean;
  @Input()
  titleZoomIn = 'Zoom in';
  @Input()
  titleZoomOut = 'Zoom out';
  @Input()
  showControlsCurrentLocation: false;
  @Input()
  titleCurrentLocation = 'Current location';

  @Input()
  showDebugInfo: boolean;
  @Input()
  opacity = 1;
  @Input()
  zoom = 7;

  markerImage = marker;

  reverseGeoSub: Subscription = null;
  pointedAddress: string;
  pointedAddressOrg: string;
  position: any;
  dirtyPosition;

  @Output()
  addressChanged = new EventEmitter<String>();
  @Input()
  positionList: any[] = [];

  constructor(private httpClient: HttpClient, private geoLocationService: MapsService, private lampeService: LampadaireService) {

    this.lampeService.getPosition().subscribe(data => {
       data.forEach(p => {
         this.point = new PositionModel();

         this.point.longitude = p.longitude;
         this.point.latitude = p.latitude;
         this.positionList.push(this.point);
       });
    });
    console.log(this.positionList);
  }

  ngOnInit() {
    if (this.showControlsCurrentLocation) {
      this.geoLocationService.getLocation().subscribe((position) => {
        this.position = position;
        if (!this.dirtyPosition) {
          this.dirtyPosition = true;
          this.longitude = this.longitudePointer = this.position.coords.longitude;
          this.latitude = this.latitudePointer = this.position.coords.latitude;
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.reverseGeoSub) {
      this.reverseGeoSub.unsubscribe();
    }
  }
  onSingleClick(event) {
    const lonlat = proj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326');
    console.log( event.coordinate + 'heh' + lonlat);
    this.longitudePointer = lonlat[0];
    this.latitudePointer = lonlat[1];
    this.reverseGeo();
  }
  increaseOpacity() {
    this.opacity += 0.1;
  }

  decreaseOpacity() {
    this.opacity -= 0.1;
  }
  increaseZoom() {
    this.zoom++;
  }
  decreaseZoom() {
    this.zoom--;
  }

  setCurrentLocation(event) {
    // TODO FIX: setting current location does move the pointer but not the map!!!
    if (this.position) {
      this.longitude = this.longitudePointer = this.position.coords.longitude;
      this.latitude = this.latitudePointer = this.position.coords.latitude;
      /**
       * Trigger new address change
       */
      this.reverseGeo();
    }
  }

  reverseGeo() {
    const service = (this.geoReverseService || '')
        .replace(new RegExp('{lon}', 'ig'), `${this.longitudePointer}`)
        .replace(new RegExp('{lat}', 'ig'), `${this.latitudePointer}`);
    this.reverseGeoSub = this.httpClient.get(service).subscribe(data => {
      const val = (data || {});

      this.pointedAddressOrg = val['display_name'];
      const address = [];

      const building = [];
      if (val['address']['building']) {
        building.push(val['address']['building']);
      }
      if (val['address']['mall']) {
        building.push(val['address']['mall']);
      }
      if (val['address']['theatre']) {
        building.push(val['address']['theatre']);
      }

      const zip_city = [];
      if (val['address']['postcode']) {
        zip_city.push(val['address']['postcode']);
      }
      if (val['address']['city']) {
        zip_city.push(val['address']['city']);
      }
      const street_number = [];
      if (val['address']['street']) {
        street_number.push(val['address']['street']);
      }
      if (val['address']['road']) {
        street_number.push(val['address']['road']);
      }
      if (val['address']['footway']) {
        street_number.push(val['address']['footway']);
      }
      if (val['address']['pedestrian']) {
        street_number.push(val['address']['pedestrian']);
      }
      if (val['address']['house_number']) {
        street_number.push(val['address']['house_number']);
      }

      if (building.length) {
        address.push(building.join(' '));
      }
      if (zip_city.length) {
        address.push(zip_city.join(' '));
      }
      if (street_number.length) {
        address.push(street_number.join(' '));
      }

      this.pointedAddress = address.join(', ');
      this.addressChanged.emit(this.pointedAddress);
    });
  }
}
