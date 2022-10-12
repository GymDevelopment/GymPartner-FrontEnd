import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-sign-up',
  templateUrl: './client-sign-up.component.html',
  styleUrls: ['./client-sign-up.component.scss']
})
export class ClientSignUpComponent implements OnInit {

  myForm!: FormGroup
  next = false;
  label: string = 'Siguiente';
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gym: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      personalGoal: ['', [Validators.required]],
      physicalState: ['', [Validators.required]],
      BirthDate: ['', [Validators.required]],
      tall: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      coach: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      }
    )
  }
  nextForms(){
    this.next = ! this.next ;
    this.label = this.next? 'Anterior' : 'Siguiente';
  }

}
