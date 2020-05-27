import { ConsommationService } from './../../../services/consommation.service';
import { LampadaireService } from '../../../services/lampadaire.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

declare var require: any;

// import * as HighchartsMore from "highcharts/highcharts-more";
// import * as HighchartsExporting from "highcharts/modules/exporting";


import * as Highcharts from 'highcharts';

import StockModule from 'highcharts/modules/stock';
// import MapModule from 'highcharts/modules/map';
// import ExportingModule from 'highcharts/modules/exporting';

import SunsetTheme from 'highcharts/themes/sunset';

//const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');

// import * as HC_customEvents from 'highcharts-custom-events';
// HC_customEvents(Highcharts);

// Alternative way of a plugin loading:
//const HC_ce = require('highcharts-custom-events');
//HC_ce(Highcharts);

StockModule(Highcharts);
// MapModule(Highcharts);
// ExportingModule(Highcharts);

// Legacy way of map loading - see file at the path for more info.
//require('../../js/worldmap')(Highcharts);

//SunsetTheme(Highcharts);


Highcharts.setOptions({
  title: {
    style: {
      color: 'black'
    }
  },
  legend: {
    enabled: true
  }
});

@Component({
  selector: 'app-conso',
  templateUrl: './conso.component.html',
  styleUrls: ['./conso.component.css']
})
export class ConsoComponent implements OnInit {

  
  options: Object;
  dataSource: any[];
  conso: Object;
  
 
// ########################################################

  constructor(private lampadaireService:LampadaireService,private consommationService:ConsommationService) {
    this.getData(); 
    // this.getCons();
    const self = this;

    // saving chart reference using chart callback
    this.chartCallback = chart => {
      self.chart = chart;
    };
    
 }
  ngOnInit() {
  }

  getText(){return 'Consommation lampadaire';}

  getData(){
    this.lampadaireService.getDataSource().subscribe(
      (data)=> {
        this.dataSource=data;
      }) }
      
  // getCons(){
  //       this.consommationService.getConso(2,4).subscribe(
  //         (data)=> {
  //           this.conso=data;
  //           console.log(this.conso)
  //         }) }

      selected:number;


  getConso(data){
    console.log('hi'+data)
    this.selected=data;
    console.log(this.options)
    // this.option['series'].push( {
    //   name: 'Gabes',
    //   data: [5.9, 3.2, 6.7, 9.5, 10.9, 16.2, 18.0, 17.6, 10.2, 12.3, 16.6, 5.8]
    // })
    // JSON.parse('this.options')
    // console.log(this.options)
    // this.optFromInputt= this.option;

  }
//################################### New Test ##################################

//##############################################################

title = "app";
chart;
updateFromInput: boolean = false;

// updateFromInput = false;
Highchartss: typeof Highcharts = Highcharts;
chartConstructor = "chart";
chartCallback;
chartOptions = {
       
  title: {
    text:this.getText()
  },
/*  subtitle: {
    text: this.dataSource[0].typeLampadaire
  },*/
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Énergie éléctrique (GW)'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: true
    }
  },
  series: [/*{
    name: 'Ariana',
    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'Tunis',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }*/]
};


onInit() {
  const self = this,
    chart = this.chart;

  chart.showLoading();
  setTimeout(() => {
    chart.hideLoading();

    self.chartOptions.series = [];

    self.updateFromInput = true;
  }, 200);
}

onInitChart() {
  const self = this,
    chart = this.chart;

  chart.showLoading();
  setTimeout(() => {
    chart.hideLoading();

    self.chartOptions.series = [
      {
        name: 'Ariana',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'Tunis',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }
    ];

    self.updateFromInput = true;
  }, 200);
}

onInitChart1() {
  const self = this,
    chart = this.chart;

  chart.showLoading();
  setTimeout(() => {
    chart.hideLoading();

console.log('avant')
console.log(this.selected)
// this.getCons(this.selected,4);
let a;
let tab1: any[] = [];
for(let i=1;i<13;i++){
this.consommationService.getConso(this.selected,i).subscribe((data)=>{
  this.conso=data
  //console.log(data)
  a=data;
  tab1[i]=data;
  

  
  //console.log('hi2'+this.conso)

})}
setTimeout(() => {
  console.log('timeout')
  console.log(tab1)
  console.log(tab1[4][0].conso)
  console.log(this.selected)
console.log(this.conso)
console.log(a[0].conso)
    console.log(self.chartOptions.series)
let k={
  name:this.selected.toString(),
  data:[tab1[1][0].conso,tab1[2][0].conso,tab1[3][0].conso,tab1[4][0].conso,tab1[5][0].conso,tab1[6][0].conso,
  tab1[7][0].conso,tab1[8][0].conso,tab1[9][0].conso,tab1[10][0].conso,tab1[11][0].conso,tab1[12][0].conso]
}
console.log(k)

  let  tab=[
      {
        name: 'Ariana',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'Tunis',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      },
      {
        name: 'Gabes',
        data: [5.9, 3.2, 6.7, 9.5, 10.9, 16.2, 18.0, 17.6, 10.2, 12.3, 16.6, 5.8]
      }
    ];
tab.push(k)
    self.chartOptions.series =tab ;
    console.log('apres')
    console.log(self.chartOptions.series)
    self.updateFromInput = true;
  }, 2000);

  }, 200);
}
}
 