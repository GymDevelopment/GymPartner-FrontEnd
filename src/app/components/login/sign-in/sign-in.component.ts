import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from '../../../models/coach';
import { Client } from '../../../models/client';
import { User } from '../../../models/user';
import { LoginService } from '../../../services/login.service';
import { Login } from '../../../models/login';
import { UserStorageService } from '../../../services/user-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  title: string = '';
  myForm!: FormGroup;
  user: string = '';
  selectedUser!: any;
  userLogin!: User;

  login : Login;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private loginService: LoginService,
    private userStorageService: UserStorageService
  ) {}

  ngOnInit(): void {
    this.user = String(this.activatedRoute.snapshot.paramMap.get('user'));
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signIn() {
    this.login = {
      email: this.myForm.value.email,
      password: this.myForm.value.password
    }

    if (this.user == 'client') {
      this.loginService.signInClient(this.login).subscribe(
        (data: any) => {
          this.userLogin = {
            id: Number(data.id),
            typeUser: 'client'
          }
          this.userStorageService.user =  this.userLogin;
          this.route.navigate(['/dashboard/home']);
      });
    } else {
      this.loginService.signInCoach(this.login).subscribe(
        (data: any) => {
          this.userLogin = {
            id: Number(data.id),
            typeUser: 'coach'
          }
          this.userStorageService.user =  this.userLogin;
          this.route.navigate(['/dashboard/home']);
      });
    }    
  }
}
