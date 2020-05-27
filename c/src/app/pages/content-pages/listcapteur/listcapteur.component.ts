import { CapteurService } from 'src/app/services/capteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcapteur',
  templateUrl: './listcapteur.component.html',
  styleUrls: ['./listcapteur.component.css']
})
export class ListcapteurComponent implements OnInit {

  
  constructor(private capteurService:CapteurService) {
    this.getPosts();
    this.add();
    this.remv();
    this.moins();
     }
  
   capteurList:any[];
    ngOnInit() {
  
    
      
  
    }
    getPosts() {
      this.capteurService.getDataSource().subscribe(data => {
        this.capteurList=data;
        console.log(data);
      });
  
    }

    class='wrapper';
    cla1='';
    cla2='';

    add(){
      this.class="wrapper list-mode"
      this.cla1="b";
      this.cla2="";
    }
    
    remv(){
      this.class="wrapper"
      this.cla1="";
      this.cla2="b";
    }
isCollapsed=false;

    moins(){
this.isCollapsed=!this.isCollapsed;

    }
    
}
