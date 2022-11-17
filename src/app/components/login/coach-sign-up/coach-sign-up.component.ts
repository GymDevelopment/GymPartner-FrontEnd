import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../../../services/gym.service';
import { Gym } from '../../../models/gym';
import { CoachService } from '../../../services/coach.service';
import { Coach } from '../../../models/coach';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-coach-sign-up',
  templateUrl: './coach-sign-up.component.html',
  styleUrls: ['./coach-sign-up.component.scss']
})
export class CoachSignUpComponent implements OnInit {
  myForm !: FormGroup;
  gyms !: Gym[];
  user !: User
  constructor(
    private fb : FormBuilder,
    private gymService: GymService,
    private coachService: CoachService,
    private userService : UserService
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
      this.user = {
        id: this.myForm.value.id,
        typeUser: 'coach',
      }
      this.userService.userInformation = this.user;
      console.log(data);
    })
  }

}
