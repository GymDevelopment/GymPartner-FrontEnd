import { Component, OnInit } from '@angular/core';
import { AssignedDietService } from '../../../services/assigned-diet.service';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';
import { ClientService } from '../../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../models/client';
import { Routine } from '../../../models/routine';
import { Diet } from '../../../models/diet';

@Component({
  selector: 'app-coach-clients-detail',
  templateUrl: './coach-clients-detail.component.html',
  styleUrls: ['./coach-clients-detail.component.scss']
})
export class CoachClientsDetailComponent implements OnInit {
  id !: Number;
  client : Client = new Client();
  gym !: string;
  routines !: Routine [];
  breakfasts !: Diet[];
  lunches !: Diet[];
  dinners !: Diet[];

  constructor(
    private assignedDietService : AssignedDietService,
    private assignedRoutineService: AssignedRoutineService,
    private clientService : ClientService,
    private activatedRoute : ActivatedRoute 

  ) { }

  ngOnInit(): void {
    /* this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.clientService.getClientId(this.id).subscribe((data: Client) =>{
      this.client = data;
      this.gym = data.gym.name;

    })
    this.assignedRoutineService.getRoutineByClientId(this.id).subscribe((data: Routine[]) =>{
      this.routines = data;
    } )
    this.assignedDietService.getBreakfastByClientId(this.id).subscribe((data: Diet[]) =>{
      this.breakfasts = data;
    } )
    this.assignedDietService.getLunchByClientId(this.id).subscribe((data: Diet[]) =>{
      this.lunches = data;
    } )
    this.assignedDietService.getDinnerByClientId(this.id).subscribe((data: Diet[]) =>{
      this.dinners = data;
    } ) */
  }

}
