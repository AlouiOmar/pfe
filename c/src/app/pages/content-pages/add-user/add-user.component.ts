import {Component, OnInit, ViewChild} from '@angular/core';
import {TokenPayload} from '../../../models/TokenPayload';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    mdp: ''
  };
  @ViewChild('adduserForm') adduserForm: NgForm;
  data: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.credentials).subscribe(
        () => {
          this.router.navigateByUrl('/listuser');
        },
        err => {
          console.error(err);
        }
    );
  }

}
