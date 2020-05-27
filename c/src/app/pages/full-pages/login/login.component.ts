import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import {TokenPayload} from '../../../models/TokenPayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    credentials: TokenPayload = {
        id: 0,
        nom: '',
        prenom: '',
        email: '',
        mdp: ''
    };
  @ViewChild('loginForm') loginForm: NgForm;
  data: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService ) {}

  ngOnInit() {}
    login() {
        this.authService.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/dashboard');
            },
            err => {
                console.error(err);
            }
        );
    }

}
