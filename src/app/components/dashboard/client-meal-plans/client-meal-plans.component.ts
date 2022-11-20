import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AssignedDiet } from '../../../models/assignedDiet';
import { AssignedDietService } from '../../../services/assigned-diet.service';

@Component({
  selector: 'app-client-meal-plans',
  templateUrl: './client-meal-plans.component.html',
  styleUrls: ['./client-meal-plans.component.scss']
})
export class ClientMealPlansComponent implements OnInit {
  dietToday !: AssignedDiet; 
  idClient !: Number;
  constructor(
    private assignedDietService: AssignedDietService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.idClient = this.userService.userInformation.id;
    this.assignedDietService.getAssignedDietByClientId(this.idClient).subscribe((data: AssignedDiet) => {
      console.log(data)
      this.dietToday = data;
    })
  }

}
