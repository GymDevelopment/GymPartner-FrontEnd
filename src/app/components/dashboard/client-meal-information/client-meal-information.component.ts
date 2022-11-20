import { Component, OnInit } from '@angular/core';
import { DietService } from '../../../services/diet.service';
import { Diet } from '../../../models/diet';

@Component({
  selector: 'app-client-meal-information',
  templateUrl: './client-meal-information.component.html',
  styleUrls: ['./client-meal-information.component.scss']
})
export class ClientMealInformationComponent implements OnInit {
  diet !: Diet
  constructor(
    private dietService: DietService,
  ) { }

  ngOnInit(): void {
    this.dietService.getDietId(1).subscribe((data: Diet) => {
      console.log(data)
      this.diet = data;
    })
  }

}
