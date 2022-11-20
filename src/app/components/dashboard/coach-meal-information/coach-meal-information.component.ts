import { Component, OnInit } from '@angular/core';
import { Diet } from '../../../models/diet';
import { DietService } from '../../../services/diet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach-meal-information',
  templateUrl: './coach-meal-information.component.html',
  styleUrls: ['./coach-meal-information.component.scss']
})
export class CoachMealInformationComponent implements OnInit {
  diet !: Diet
  dietId : Number;
  constructor(
    private dietService: DietService,
    private activatedRoute:  ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dietId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.dietService.getDietId(this.dietId).subscribe((data: Diet) => {
      this.diet = data;
      this.diet.picture = 'data:image/jpeg;base64,' + this.diet.picture;
    })
  }

}
