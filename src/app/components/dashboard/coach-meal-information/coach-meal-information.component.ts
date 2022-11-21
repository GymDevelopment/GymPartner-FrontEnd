import { Component, OnInit } from '@angular/core';
import { Diet } from '../../../models/diet';
import { DietService } from '../../../services/diet.service';
import { ActivatedRoute } from '@angular/router';
import { DietsStorageService } from '../../../services/diets-storage.service';

@Component({
  selector: 'app-coach-meal-information',
  templateUrl: './coach-meal-information.component.html',
  styleUrls: ['./coach-meal-information.component.scss']
})
export class CoachMealInformationComponent implements OnInit {
  diet : Diet = new Diet();
  dietId : Number;
  picture : any;
  constructor(
    private dietService: DietService,
    private activatedRoute:  ActivatedRoute,
    private dietStorageService : DietsStorageService
  ) { }

  ngOnInit(): void {
    this.dietId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.dietService.getDietId(this.dietId).subscribe((data: Diet) => {
      this.diet = data;
     this.picture = 'data:image/jpeg;base64,' + this.diet.picture;
    })
  }

  assigned(){
   
    if(this.diet.mealType?.toLowerCase() == 'breakfast'){
      this.dietStorageService.breakfastAssigned = this.diet;
    } else if(this.diet.mealType?.toLowerCase() == 'lunch'){
      this.dietStorageService.lunchAssigned = this.diet;
    } else if(this.diet.mealType?.toLowerCase() == 'dinner'){
      this.dietStorageService.dinnerAssigned = this.diet;
    }
    
  }

}
