import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coach-sign-up',
  templateUrl: './coach-sign-up.component.html',
  styleUrls: ['./coach-sign-up.component.scss']
})
export class CoachSignUpComponent implements OnInit {
  myForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      idCoach: ['', [Validators.required, Validators.minLength(8)]],
      gym: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  

}
