import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../../../services/routine.service';
import { Routine } from '../../../models/routine';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coach } from '../../../models/coach';
import { CoachService } from '../../../services/coach.service';

@Component({
  selector: 'app-coach-training-add',
  templateUrl: './coach-training-add.component.html',
  styleUrls: ['./coach-training-add.component.scss']
})
export class CoachTrainingAddComponent implements OnInit {
  myForm!: FormGroup;
  coach!: Coach;
  constructor(
    private routineService: RoutineService,
    private coachService: CoachService,
    private fb: FormBuilder,
    private route: Router

  ) { }

  ngOnInit(): void {
    this.coachService.getCoachId(2).subscribe((data: Coach) => {
      this.coach = data;
    })

    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      description: ['', [Validators.required]],
      indication: ['', [Validators.required]],
      tips: ['', [Validators.required]],
      url: ['', [Validators.required]],
      calories: ['', [Validators.required]],
    });
  }
  addRoutine(): void {
    
     const routine: Routine = {
      name: this.myForm.value.name,
      description: this.myForm.value.description,
      indication: this.myForm.value.indication,
      tips: this.myForm.value.tips,
      url: this.myForm.value.url,
      calories: this.myForm.value.calories,
      coach : this.coach
    };

    this.routineService.addRoutine(routine).subscribe((data: Routine) =>{
      console.log(data)
    })
    this.route.navigate(['/dashboard/coach-training-routine']); 
  }
}
