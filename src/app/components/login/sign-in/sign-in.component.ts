import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from '../../../models/coach';
import { ClientService } from '../../../services/client.service';
import { CoachService } from '../../../services/coach.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  title: string = '';
  myForm!: FormGroup;
  user!: any;
  clients!: Client[];
  selectedUser!: any;
  coaches !: Coach[];
  selectedCoach !: Coach;

  constructor(
    private fb: FormBuilder,
     private activatedRoute: ActivatedRoute, 
     private route: Router,
     private clientService: ClientService,
     private coachService: CoachService
     ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    console.log(this.user)
    if(this.user == 'client'){
      this.title = 'cliente';
      this.clientService.getClient().subscribe((data: Client[])=>{
        this.clients = data;
      });
    } else {
      this.title = 'coach'
      this.coachService.getCoach().subscribe((data: Coach[])=>{
        this.coaches = data;
      });
    }
    this.myForm = this.fb.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password : ['', Validators.required]
      }
    )
  }
  
  signIn(){
   /*  if(this.user == 'client'){
      this.selectedUser = this.clients.find(x=>{
        return x.email ==  this.myForm.value.email && x.password ==  this.myForm.value.password;
      })
    } else {
      this.selectedUser = this.coaches.find(x=>{
        return x.email ==  this.myForm.value.email && x.password ==  this.myForm.value.password;
      })
    }
    if(this.selectedUser != undefined){
      this.route.navigate(['/dashboard/home'])
    } */
    this.route.navigate(['/dashboard/home'])
  }

}
