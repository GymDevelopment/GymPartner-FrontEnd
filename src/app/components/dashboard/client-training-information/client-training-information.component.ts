import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';
import { AssignedRoutine } from '../../../models/assignedRoutine';
import { Routine } from '../../../models/routine';

@Component({
  selector: 'app-client-training-information',
  templateUrl: './client-training-information.component.html',
  styleUrls: ['./client-training-information.component.scss'],
})
export class ClientTrainingInformationComponent implements OnInit {
  id !: Number;
  assignedRoutine : AssignedRoutine = new AssignedRoutine();
  routine : Routine = new Routine();
  constructor(
    private activatedRoute: ActivatedRoute,
    private assignedRoutineService : AssignedRoutineService,
    private route: Router
    
  ) {
    
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.assignedRoutineService.getAssignedRoutineId(this.id).subscribe((data: AssignedRoutine) =>{
      this.assignedRoutine = data;
      this.routine = data.routine;
      console.log(this.routine.url);
    })
  }
  endRoutine(){
    this.assignedRoutine.done = true;
    this.assignedRoutineService.updateAssignedRoutine(this.assignedRoutine.id, this.assignedRoutine).subscribe((data: AssignedRoutine) =>{
      console.log(data);
    })
    this.route.navigate(['/dashboard/client-training-routine']);
  }
}
