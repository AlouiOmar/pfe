import { Component, OnInit } from '@angular/core';
import {LampadaireService} from '../../../services/lampadaire.service';
import {CapteurService} from '../../../services/capteur.service';

@Component({
  selector: 'app-alert-panne',
  templateUrl: './alert-panne.component.html',
  styleUrls: ['./alert-panne.component.css']
})
export class AlertPanneComponent implements OnInit {
  capteurPanne: any[] = [];
  lampPanne: any[] = [];
  dataSource: any[] = [];

  constructor(private lampadaireService: LampadaireService, private capteurService: CapteurService) { }

  ngOnInit() {
    this.lampadaireService.getDataSource().subscribe(data => {
      data.forEach(p => {
        if (p.etat !== 'bon') {
          this.lampPanne.push(p);
        }
      });
      console.log(this.lampPanne);
    });

    this.capteurService.getDataSource().subscribe(data => {
      data.forEach(p => {
        if (p.etat !== 'bon') {
          this.capteurPanne.push(p);
        }
      });      console.log(this.capteurPanne);
    });
    this.dataSource = this.capteurPanne.concat(this.lampPanne);
console.log(this.dataSource);
  }

}
