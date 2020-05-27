import { LampeService } from '../../../services/lampe.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Lampe } from 'src/app/models/lampe.model';

@Component({
  selector: 'app-addlampe',
  templateUrl: './addlampe.component.html',
  styleUrls: ['./addlampe.component.css']
})
export class AddlampeComponent implements OnInit {

  lampeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private lampeService: LampeService
            ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.lampeForm = this.formBuilder.group(
      {
            typeLampe:                    ['', Validators.required],
            conso:                        ['', Validators.required],
            description:                  ['', Validators.required]

      }
    );
  }

  onSubmitForm() {
    const formValue = this.lampeForm.value;
    const newLampe = new Lampe(
      formValue['typeLampe'],
      formValue['conso'],
      formValue['description']

    );
this.lampeService.addLampe(newLampe);
this.router.navigate(['/listlampe']);

  }

onSave() {

  this.lampeService.saveAll();
}

}
