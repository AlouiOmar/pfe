import { LampeService } from './../../../services/lampe.service';
import { LampadaireService } from '../../../services/lampadaire.service';
import { Lampadaire } from './../../../models/lampadaire.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  lampadaireForm:FormGroup;
  lampeList:any[];
  

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private lampadaireService:LampadaireService,
    private lampeService:LampeService,
    private capteurService:CapteurService
            ) {
              this.getLampe();
              this.getCapteur();
            }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.lampadaireForm=this.formBuilder.group(
      {
            typeLampadaire:            ['',Validators.required],
            region:                    ['',Validators.required],
            latitude:                  ['',Validators.required],
            longitude:                 ['',Validators.required],
            typeCapteur:               ['',Validators.required],
            typeAmpoule:               ['',Validators.required],
            dateAjout:                 ['',Validators.required]


      }
    );
  }

  onSubmitForm(){
    const formValue=this.lampadaireForm.value;
    const newLampadaire=new Lampadaire(0,
      formValue['typeLampadaire'],
      "allumé",
      formValue['region'],
      "500",
      formValue['latitude'],
      formValue['longitude'],
      formValue['typeCapteurr'],
      formValue['typeAmpoule'],
      formValue['dateAjout']
    )
this.lampadaireService.addLampadaire(newLampadaire);  
this.router.navigate(['/listlampadaire']);

  }

onSave(){

  this.lampadaireService.saveAll();
}

getLampe(){
  this.lampeService.getDataSource().subscribe(
    (data)=>{
      this.lampeList=data;
    }
  );
}
capteurList:any[];
getCapteur(){
  this.capteurService.getDataSource().subscribe(
    (data) => {
      this.capteurList=data;
    }
  );
}
}
