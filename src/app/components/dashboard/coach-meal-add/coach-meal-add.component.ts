import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DietService } from '../../../services/diet.service';
import { Diet } from '../../../models/diet';

@Component({
  selector: 'app-coach-meal-add',
  templateUrl: './coach-meal-add.component.html',
  styleUrls: ['./coach-meal-add.component.scss']
})
export class CoachMealAddComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mealService: DietService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.reactiveForm();
  }

  ngOnInit(): void {}

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      calories: ['', [Validators.required]],
      protein: ['', [Validators.required]],
      dietType: ['', [Validators.required]],
    });
  }

  saveMeal(): void {
    const meal: Diet = {
      id:     this.myForm.get('name')!.value,
      name:       this.myForm.get('name')!.value,
      meal:       this.myForm.get('name')!.value,
      hour:       this.myForm.get('name')!.value,
      calories:   this.myForm.get('name')!.value,
      indication: this.myForm.get('name')!.value,
      idTrainer:  this.myForm.get('name')!.value,
    };
    this.mealService.addDiet(meal).subscribe({
      next: (data: any) => {
        this.snackBar.open('La dieta fue agregado con exito', '', {
          duration: 3000,
        });
        this.router.navigate(['/dashboard/coach/meal-plans']);
      },
      error: (err : any) => {
        console.log(err);
      },
    });
  }
}
