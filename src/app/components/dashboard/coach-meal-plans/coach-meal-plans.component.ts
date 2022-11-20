import { Component, OnInit } from '@angular/core';
import { Diet } from '../../../models/diet';
import { AssignedDiet } from '../../../models/assignedDiet';
import { AssignedDietService } from '../../../services/assigned-diet.service';
import { UserService } from '../../../services/user.service';
import { DietService } from '../../../services/diet.service';

@Component({
  selector: 'app-coach-meal-plans',
  templateUrl: './coach-meal-plans.component.html',
  styleUrls: ['./coach-meal-plans.component.scss']
})
export class CoachMealPlansComponent implements OnInit {
  breakfast !: Diet[]
  lunch !: Diet[]
  dinner !: Diet[]
  idCoach !: Number;
  id : Number;
  option : String = "Ver solo mis dietas"
  constructor(
    private dietService : DietService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.idCoach = this.userService.userInformation.id;
    this.id = -1;
    this.getInformation();
  }

  getInformation(){
    this.dietService.getBreakfastByCoachId(this.id).subscribe((data: Diet[]) => {
      this.breakfast = data;
      console.log(this.breakfast);
    })
    this.dietService.getLunchByCoachId(this.id).subscribe((data: Diet[]) => {
      this.lunch = data;
    })
    this.dietService.getDinnerByCoachId(this.id).subscribe((data: Diet[]) => {
      this.dinner = data;
    })
  }

  changeOption(){
    if(this.option == "Ver solo mis dietas"){
      this.option = "Ver todas las dietas";
      this.id = this.idCoach;
    }else{
      this.option = "Ver solo mis dietas";
      this.id = -1;
    }
    this.getInformation();
  }

}
