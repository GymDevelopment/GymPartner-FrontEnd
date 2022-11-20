import { Component, OnInit } from '@angular/core';
import { DietService } from '../../../services/diet.service';
import { Diet } from '../../../models/diet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-meal-information',
  templateUrl: './client-meal-information.component.html',
  styleUrls: ['./client-meal-information.component.scss']
})
export class ClientMealInformationComponent implements OnInit {
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
