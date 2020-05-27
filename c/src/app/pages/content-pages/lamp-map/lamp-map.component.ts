import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-lamp-map',
  templateUrl: './lamp-map.component.html',
  styleUrls: ['./lamp-map.component.css']
})
export class LampMapComponent implements OnInit {
  name = 'Angular';


  onAddressChange(event) {
    console.log('onAddressChange', event);
  }

  ngOnInit(): void {
  }
}

