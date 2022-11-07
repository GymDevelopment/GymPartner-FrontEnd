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
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      gym: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      
      personalGoal: ['', [Validators.required,Validators.maxLength(50)]],
      physicalState: ['', [Validators.required]],
      BirthDate: ['', [Validators.required]],
      tall: ['', [Validators.required,Validators.maxLength(3)]],
      weight: ['', [Validators.required,Validators.maxLength(3)]],
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
