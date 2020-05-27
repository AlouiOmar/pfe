import { Lampe } from './../models/lampe.model';
import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LampeService {



    lampe=[
        
        {

            typeLampe:'led',
            consoConstruteur:'500',
            description:'une lampe led  qui consomme 500 wt'

        },
        {

            typeLampe:'eco',
            consoConstruteur:'300',
            description:'une lampe eco  qui consomme 300 wt'

        }

        ];


constructor(private http:HttpClient){}
   

saveAll(){

this.http.put<any[]>('https://lampadaire-d5b20.firebaseio.com/lampe.json',this.lampe).subscribe(
    () => {
        console.log("save complete");
    },
    (error)=>{
            console.log(error);
    }
);


}

getDataSource(){
//http://www.mocky.io/v2/5c90e1d73300005024649994
           
    return this.http.get<any[]>('https://lampadaire-d5b20.firebaseio.com/lampe.json');

      
  }

addLampe(lampe:Lampe){
    let lamp:any[]=[];
    this.getDataSource().subscribe(data => {
         lamp=data;
        console.log(data);
        const lampeObject={
            typeLampe:'',
            consoConstruteur:'',
            description:''
        };
  
        lampeObject.typeLampe=lampe.typeLampe;
        lampeObject.consoConstruteur=lampe.consoConstruteur;
        lampeObject.description=lampe.description;
        
  
        lamp.push(lampeObject);
        console.log(lamp);
  
        this.http.put('https://lampadaire-d5b20.firebaseio.com/lampe.json',lamp).subscribe(
          () => {
              console.log("save lampe complete");
          },
          (error)=>{
                  console.log(error);
          }
      );
      });

     





      



}




}
