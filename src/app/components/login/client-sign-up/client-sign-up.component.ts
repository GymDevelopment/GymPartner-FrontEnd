import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../../models/client';
import { Gym } from '../../../models/gym';
import { Coach } from '../../../models/coach';
import { GymService } from '../../../services/gym.service';
import { CoachService } from '../../../services/coach.service';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent implements OnInit {

  myForm!: FormGroup
  gyms!: Gym[];
  coaches!: Coach[];
  next = false;
  label: string = 'Siguiente';
  constructor(
    private fb : FormBuilder, 
    private gymService: GymService,
    private coachService: CoachService,
    private clientService : ClientService
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      gym: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      
      personalGoal: ['', [Validators.required,Validators.maxLength(50)]],
      physicalState: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      tall: ['', [Validators.required,Validators.maxLength(3)]],
      weight: ['', [Validators.required,Validators.maxLength(3)]],
      coach: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      }
    )
    this.loadData();
  }
  loadData(){
    this.coachService.getCoaches().subscribe((data: Coach[]) => {
      this.coaches = data;
      //console.log(this.coaches)
    })
    this.gymService.getGyms().subscribe((data: Gym[]) => {
      this.gyms = data;
      //console.log(this.gyms)
    })
  }
  nextForms(){
    this.next = ! this.next ;
    this.label = this.next? 'Anterior' : 'Siguiente';
/*     let date : Date = new Date(this.myForm.value.BirthDate);
    let client : Client = this.myForm.value; 
    console.log(client) */
  }
  register(){
    this.clientService.addClient(this.myForm.value).subscribe((data: Client) => {
      console.log(data);
    })
  }

}
