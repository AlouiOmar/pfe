import { LampadaireService } from '../../../services/lampadaire.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('clientGrid') clientGrid: DxDataGridComponent;


  constructor(private lampadaireService: LampadaireService, private location: Location) {
  this.getPosts();
  this.getPosition();
   }
  status = [{

    'Name': 'allumé'
  }, {

    'Name': 'éteint'
  }];

  type = [{

    'Name': 'solo'
  }, {

    'Name': 'double'
  }];

  exist = [{

    'Name': 'Oui'
  }, {

    'Name': 'Non'
  }];

  position: any[];
 dataSource: any[];
  ngOnInit() {




  }


delete(event) {

  this.lampadaireService.deleteLampadaire(event.key.id).subscribe();
  console.log(event.key.id);
  console.log(event.data);

}

  insert(event) {
    //console.log('hi'+event.data);

    // console.log(event.data.id)
    // console.log(event.data.type)
    // console.log(event.data.status)
    // console.log(event.data.date)
    console.log(event.data);

    const lampadaire = {
      id: event.data.id,
      type: event.data.type,
      status: event.data.status,
      date: event.data.date,
      region: event.data.region
    };
    // console.log(lampadaire)

    this.lampadaireService.insertLampadaire(lampadaire).subscribe();
    // console.log(event.key);
    //console.log(event.data);
     location.reload();

    //  this.clientGrid.instance.refresh();


  }
  update(event) {

    console.log(event.data);

    console.log(event.key.id);
    console.log(event.data);
    const lampadaire = {
      id: event.key.id,
      type: event.data.type,
      status: event.data.status,
      date: event.data.date,
      region: event.data.region
    };
    console.log('hi');
    console.log(lampadaire);

    this.lampadaireService.updateLampadaire(lampadaire).subscribe();
    location.reload();


    }
  getPosts() {
    this.lampadaireService.getDataSource().subscribe(data => {
      this.dataSource = data;
      console.log(data);
    });

  }

  getPosition() {
    this.lampadaireService.getPosition().subscribe(data => {
      this.position = data;
      console.log(data);
    });

  }
}
