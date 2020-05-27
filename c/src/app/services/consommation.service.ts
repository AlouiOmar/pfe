import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { Lampadaire } from '../models/lampadaire.model';

@Injectable()
export class ConsommationService {
    lampa: any;



constructor(private http:HttpClient){}
   

saveAll(){

this.http.put<any[]>('https://lampadaire-d5b20.firebaseio.com/lampadaire.json',this.lampa).subscribe(
    () => {
        console.log("save complete");
    },
    (error)=>{
            console.log(error);
    }
);


}

getDataSource(){
//http://www.mocky.io/v2/5c90e1d73300005024649994              mocky
//https://lampadaire-d5b20.firebaseio.com/lampadaire.json      firebase  
    return this.http.get<any[]>('/api/profile');

      
  }


  getPosition(){
    //http://www.mocky.io/v2/5c90e1d73300005024649994              mocky
    //https://lampadaire-d5b20.firebaseio.com/lampadaire.json      firebase  
        return this.http.get<any[]>('/api/position');
    
          
      }
    


getConso(id,mois){
  console.log('id:'+id+' mois: '+mois)
  const url = `api/consommation/${id}/${mois}`

  return this.http.get(url);

}

insertLampadaire(data){
  return this.http.post('api/register',data);

}

updateLampadaire(data){

  return this.http.post('api/update',data);

}

addLampadaire(lampad:Lampadaire){
    let lamp:any[]=[];
    this.getDataSource().subscribe(data => {
         lamp=data;
        console.log(data);
        const lampadaireObject={
            id:0,
            typeLampadaire:'',
            status:'',
            region:'',
            consommation:'',
            latitude:'',
            longitude:'',
            typeCapteur:'',
            typeAmpoule:'',
            dateAjout:''
        };
  
        lampadaireObject.id=lamp[lamp.length -1].id +1;
        lampadaireObject.typeLampadaire=lampad.typeLampadaire;
        lampadaireObject.status=lampad.status;
        lampadaireObject.region=lampad.region;
        lampadaireObject.consommation=lampad.consommation;
        lampadaireObject.latitude=lampad.latitude;
        lampadaireObject.longitude=lampad.longitude;
        lampadaireObject.typeCapteur=lampad.typeCapteur;
        lampadaireObject.typeAmpoule=lampad.typeAmpoule;
        lampadaireObject.dateAjout=lampad.dateAjout;
  
        lamp.push(lampadaireObject);
        console.log(lamp);
  
        this.http.put('https://lampadaire-d5b20.firebaseio.com/lampadaire.json',lamp).subscribe(
          () => {
              console.log("save lampadaire complete");
          },
          (error)=>{
                  console.log(error);
          }
      );
      });

     





      



}




}
