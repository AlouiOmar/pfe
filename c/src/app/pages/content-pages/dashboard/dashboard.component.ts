import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    this.add();
    this.remv();
  }

class='wrapper';
cla1='';
cla2='';
  ngOnInit() {
  }
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
}
