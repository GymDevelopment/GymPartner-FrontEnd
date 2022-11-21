import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';
import { CoachService } from '../../../services/coach.service';
import { Coach } from '../../../models/coach';
import { Client } from '../../../models/client';
import { AssignedDiet } from '../../../models/assignedDiet';
import { AssignedDietService } from '../../../services/assigned-diet.service';
import { Diet } from '../../../models/diet';
import { DietsStorageService } from '../../../services/diets-storage.service';

@Component({
  selector: 'app-coach-assign-diet',
  templateUrl: './coach-assign-diet.component.html',
  styleUrls: ['./coach-assign-diet.component.scss']
})
export class CoachAssignDietComponent implements OnInit {
  myForm : FormGroup;
  idCoach : number;
  myClients : Client[] = [];
  coach : Coach = new Coach();
  constructor(
    private fb: FormBuilder,
    private userService : UserService,
    private clientService : ClientService,
    private coachService : CoachService,
    private assignedDietService : AssignedDietService,
    private dietsStorageService : DietsStorageService
  ) { }

  ngOnInit(): void {
    this.idCoach = this.userService.userInformation.id;
    this.myForm = this.fb.group({
      date: ['', [Validators.required]],
      client: ['', [Validators.required]],
    });

    this.clientService.getClientByCoachId(this.idCoach).subscribe((data: Client[]) =>{
      this.myClients = data;
    } )
    this.coachService.getCoachId(this.idCoach).subscribe((data: Coach) =>{
      this.coach = data;
    } )

  }
  assignedDiet(){
    let lunch : Diet = this.dietsStorageService.lunchAssigned;
    let breakfast : Diet = this.dietsStorageService.breakfastAssigned;
    let dinner : Diet = this.dietsStorageService.dinnerAssigned;
      let assignedDietAux : AssignedDiet = {
        date: this.myForm.value.date,
        client: this.myForm.value.client,
        coach: this.coach,
        done : false,
        breakfast : breakfast,
        lunch : lunch,
        dinner : dinner
      }
      this.assignedDietService.addAssignedDiet(assignedDietAux).subscribe((data: AssignedDiet) =>{
        console.log(data);
        this.dietsStorageService.destroy();
      })
  }

}
