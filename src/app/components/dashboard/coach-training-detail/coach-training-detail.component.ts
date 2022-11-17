import { Component, OnInit } from '@angular/core';
import { Routine } from '../../../models/routine';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from '../../../services/routine.service';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client.service';
import { AssignedRoutine } from '../../../models/assignedRoutine';
import { Coach } from '../../../models/coach';
import { CoachService } from '../../../services/coach.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-coach-training-detail',
  templateUrl: './coach-training-detail.component.html',
  styleUrls: ['./coach-training-detail.component.scss']
})
export class CoachTrainingDetailComponent implements OnInit {
  id !: Number;
  idCoach !: Number;
  routine : Routine = new Routine();
  clients: Client[] = [];
  coach!: Coach;
  myClients: Client[] = [];
  myForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private coachService: CoachService,
    private routineService: RoutineService,
    private assignedRoutineService: AssignedRoutineService,
    private clientService: ClientService,
    private route : Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.idCoach = this.userService.userInformation.id;
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.routineService.getRoutineId(this.id).subscribe((data: Routine) =>{
      this.routine = data;
    })
    this.assignedRoutineService.getClientsByRoutineId(this.id).subscribe((data: Client[]) =>{
      this.clients = data;
    } )
    this.clientService.getClientByCoachId(this.idCoach).subscribe((data: Client[]) =>{
      this.myClients = data;
    } )
    this.coachService.getCoachId(this.idCoach).subscribe((data: Coach) =>{
      this.coach = data;
    } )
    this.reactiveForm() 
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      client: ['', [Validators.required]],
    });
  }

  addAssignedRoutine(){
    let assignedRoutine : AssignedRoutine = {
      routine:  this.routine,
      client:    this.myForm.value.client,
      coach:     this.coach,
      done:       false,
      date:       this.myForm.value.date,
      duration:    this.myForm.value.duration,
    }
    this.assignedRoutineService.addAssignedRoutine(assignedRoutine).subscribe((data: Client) =>{
      console.log(data)
    })
    this.route.navigate(['/dashboard/coach-training-routine']);
  }

  }
