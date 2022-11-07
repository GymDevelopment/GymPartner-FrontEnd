import { Component, OnInit } from '@angular/core';
import { Routine } from '../../../models/routine';
import { RoutineService } from '../../../services/routine.service';

@Component({
  selector: 'app-coach-training-routine',
  templateUrl: './coach-training-routine.component.html',
  styleUrls: ['./coach-training-routine.component.scss']
})
export class CoachTrainingRoutineComponent implements OnInit {
  routines !: Routine [];
  myRoutines !: Routine [];
  constructor(
    private routineService: RoutineService,
  ) { }

  ngOnInit(): void {
    this.routineService.getRoutine().subscribe((data: Routine[]) => {
      this.routines = data;
    });
    this.routineService.getRoutinesByCoachId(2).subscribe((data: Routine[]) => {
      this.myRoutines = data;
    } )
  }

}
