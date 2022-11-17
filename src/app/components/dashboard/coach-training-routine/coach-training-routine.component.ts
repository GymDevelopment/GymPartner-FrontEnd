import { Component, OnInit } from '@angular/core';
import { Routine } from '../../../models/routine';
import { RoutineService } from '../../../services/routine.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-coach-training-routine',
  templateUrl: './coach-training-routine.component.html',
  styleUrls: ['./coach-training-routine.component.scss']
})
export class CoachTrainingRoutineComponent implements OnInit {
  routines !: Routine [];
  myRoutines !: Routine [];
  id !: Number;
  constructor(
    private routineService: RoutineService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.userService.userInformation.id;
    this.routineService.getRoutine().subscribe((data: Routine[]) => {
      this.routines = data;
    });
    this.routineService.getRoutinesByCoachId(this.id).subscribe((data: Routine[]) => {
      this.myRoutines = data;
    } )
  }

}
