import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AssignedDiet } from '../../../models/assignedDiet';
import { AssignedDietService } from '../../../services/assigned-diet.service';
import { Diet } from '../../../models/diet';
import { DietService } from '../../../services/diet.service';

@Component({
  selector: 'app-client-meal-plans',
  templateUrl: './client-meal-plans.component.html',
  styleUrls: ['./client-meal-plans.component.scss']
})
export class ClientMealPlansComponent implements OnInit {
  dietToday !: AssignedDiet; 
  idClient !: Number;
  breakfast: Diet = new Diet();
  dinner : Diet = new Diet();
  lunch : Diet = new Diet();
  constructor(
    private assignedDietService: AssignedDietService,
    private userService : UserService, 
    private dietService : DietService
  ) { }

  ngOnInit(): void {
    this.idClient = this.userService.userInformation.id;
    this.assignedDietService.getAssignedDietByClientId(this.idClient).subscribe((data: any[]) => {
      console.log(data[0]);
      this.dietService.getDietId(data[0].breakfast.id).subscribe((data: Diet) =>{
        this.breakfast = data;
        this.breakfast.picture = 'data:image/jpeg;base64,' + this.breakfast.picture;
      })
      this.dietService.getDietId(data[0].dinner.id).subscribe((data: Diet) =>{
        this.dinner = data;
        this.dinner.picture = 'data:image/jpeg;base64,' + this.dinner.picture;
      })
      this.dietService.getDietId(data[0].dinner.id).subscribe((data: Diet) =>{
        this.lunch = data;
        this.lunch.picture = 'data:image/jpeg;base64,' + this.lunch.picture;
      })
    })
    
    
  }

}
