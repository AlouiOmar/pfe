import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capteur } from 'src/app/models/capteur.model';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-addcapteur',
  templateUrl: './addcapteur.component.html',
  styleUrls: ['./addcapteur.component.css']
})
export class AddcapteurComponent implements OnInit {
  capteurForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private capteurService: CapteurService
            ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.capteurForm = this.formBuilder.group(
      {
            marque:                       ['', Validators.required],
            nom:                          ['', Validators.required],
            typeCapteur:                  ['', Validators.required],
            dureeDeVie:                   ['', Validators.required],
            description:                  ['', Validators.required]

      }
    );
  }

  onSubmitForm() {
    const formValue = this.capteurForm.value;
    const newCapteur = new Capteur(
      formValue['marque'],
      formValue['nom'],
      formValue['typeCapteur'],
      formValue['dureeDeVie'],
      formValue['description']

    );


this.capteurService.addCapteur(newCapteur);
this.router.navigate(['/listcapteur']);

  }

onSave() {

  this.capteurService.saveAll();
}

}
