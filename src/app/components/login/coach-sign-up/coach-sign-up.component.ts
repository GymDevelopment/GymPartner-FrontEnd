import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../../../services/gym.service';
import { Gym } from '../../../models/gym';
import { CoachService } from '../../../services/coach.service';
import { Coach } from '../../../models/coach';

@Component({
  selector: 'app-coach-sign-up',
  templateUrl: './coach-sign-up.component.html',
  styleUrls: ['./coach-sign-up.component.scss']
})
export class CoachSignUpComponent implements OnInit {
  myForm !: FormGroup;
  gyms !: Gym[];
  constructor(
    private fb : FormBuilder,
    private gymService: GymService,
    private coachService: CoachService,
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gym: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
    })
    this.loadData();
  }

  loadData(){
    this.gymService.getGyms().subscribe((data: Gym[]) => {
      this.gyms = data;
      //console.log(this.gyms)
    })
  }
  register(){
    this.coachService.addCoach(this.myForm.value).subscribe((data: Coach) => {
      console.log(data);
    })
  }

}
