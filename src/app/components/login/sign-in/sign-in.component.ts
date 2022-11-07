import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from '../../../models/coach';
import { ClientService } from '../../../services/client.service';
import { CoachService } from '../../../services/coach.service';
import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  title: string = '';
  myForm!: FormGroup;
  user: string = '';
  clients!: Client[];
  selectedUser!: any;
  coaches!: Coach[];
  userLogin!: User;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private clientService: ClientService,
    private coachService: CoachService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = String(this.activatedRoute.snapshot.paramMap.get('user'));
    if (this.user == 'client') {
      this.title = 'cliente';
      this.clientService.getClient().subscribe((data: Client[]) => {
        this.clients = data;
      });
    } else {
      this.title = 'coach';
      this.coachService.getCoaches().subscribe((data: Coach[]) => {
        this.coaches = data;
      });
    }
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signIn() {
    if (this.user == 'client') {
      this.selectedUser = this.clients.find((x) => {
        return (
          x.email == this.myForm.value.email &&
          x.password == this.myForm.value.password
        );
      });
    } else {
      this.selectedUser = this.coaches.find((x) => {
        return (
          x.email == this.myForm.value.email &&
          x.password == this.myForm.value.password
        );
      });
    }
    if (this.selectedUser != undefined) {
      this.userLogin = {
        id: Number(this.selectedUser.id),
        typeUser: this.user
      };
      this.userService.userInformation = this.userLogin;
      this.route.navigate(['/dashboard/home']);
    }
    //this.route.navigate(['/dashboard/home'])
  }
}
