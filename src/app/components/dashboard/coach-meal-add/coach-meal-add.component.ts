import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DietService } from '../../../services/diet.service';
import { Diet } from '../../../models/diet';
import { UserService } from '../../../services/user.service';
import { CoachService } from '../../../services/coach.service';
import { Coach } from '../../../models/coach';

@Component({
  selector: 'app-coach-meal-add',
  templateUrl: './coach-meal-add.component.html',
  styleUrls: ['./coach-meal-add.component.scss']
})
export class CoachMealAddComponent implements OnInit {
  myForm!: FormGroup;
  idCoach !: Number;
  coach !: Coach
  selectedFile: any;
  nameImg: string = '';
  constructor(
    private fb: FormBuilder,
    private mealService: DietService,
    private snackBar: MatSnackBar,
    private router: Router,
    private userService : UserService,
  ) {
    this.idCoach = this.userService.userInformation.id;
    
    this.reactiveForm();
  }

  ngOnInit(): void {}

  reactiveForm() {

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      meal: ['', [Validators.required]],
      indication: ['', [Validators.required]],
      calories: ['', [Validators.required]],
      hour: ['', [Validators.required]],
      mealType: ['', [Validators.required]],
      picture: ['', [Validators.required]],
    });
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.nameImg = event.target.files[0].name;
  }

  saveMeal(): void {
    const meal: any = {
      id:     0,
      name:       this.myForm.value.name,
      meal:       this.myForm.value.meal,
      indication: this.myForm.value.indication,
      calories:   this.myForm.value.calories,
      hour:       this.myForm.value.hour,
      mealType:   this.myForm.value.mealType,
      picture:    this.selectedFile,
    };
    const uploadImageData = new FormData();
    uploadImageData.append('picture', meal.picture, meal.picture.name);
    uploadImageData.append('name', meal.name.toString());
    uploadImageData.append('meal', meal.meal.toString());
    uploadImageData.append('indication', meal.indication.toString());
    uploadImageData.append('calories', meal.calories.toString());
    uploadImageData.append('hour', meal.hour.toString());
    uploadImageData.append('mealType', meal.mealType.toString());
    uploadImageData.append('coachId', this.idCoach.toString());

    console.log(uploadImageData);
    
    this.mealService.addDiet(meal).subscribe({
      next: (data: any) => {
        this.snackBar.open('La dieta fue agregado con exito', '', {
          duration: 3000,
        });
        this.router.navigate(['/dashboard/coach-meal-plans']);
      },
      error: (err : any) => {
        console.log(err);
      },
    });
  } 
}
