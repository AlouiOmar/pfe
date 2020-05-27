import { Capteur } from './../models/capteur.model';
import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CapteurService {



    lampe = [

        {
            marque: 'Be Wireless Solution',
            nom: 'Capteur c5',
            typeCapteur: 'luminosité',
            dureeDeVie: '10',
            description: 'un capteur génération 5 qui dure 10 ans'

        },
        {

            marque: 'Be Wireless Solution',
            nom: 'Capteur c4',
            typeCapteur: 'consommation',
            dureeDeVie: '8',
            description: 'un capteur génération 4 qui dure 8 ans'

        }

        ];


constructor(private http: HttpClient) {}


saveAll() {

this.http.put<any[]>('https://lampadaire-d5b20.firebaseio.com/capteur.json', this.lampe).subscribe(
    () => {
        console.log('save complete');
    },
    (error) => {
            console.log(error);
    }
);


}

getDataSource() {

    return this.http.get<any[]>('https://lampadaire-d5b20.firebaseio.com/capteur.json');


  }

addCapteur(capteur: Capteur) {
    let cap: any[] = [];
    this.getDataSource().subscribe(data => {
         cap = data;
        console.log(data);
        const capteurObject = {
            marque: '',
            nom: '',
            typeCapteur: '',
            dureeDeVie: '',
            description: ''
        };

        capteurObject.marque = capteur.marque;
        capteurObject.nom = capteur.nom;
        capteurObject.typeCapteur = capteur.typeCapteur;
        capteurObject.dureeDeVie = capteur.dureeDeVie;
        capteurObject.description = capteur.description;


        cap.push(capteurObject);
        console.log(cap);

        this.http.put('https://lampadaire-d5b20.firebaseio.com/capteur.json', cap).subscribe(
          () => {
              console.log('save capteur complete');
          },
          (error) => {
                  console.log(error);
          }
      );
      });











}




}
