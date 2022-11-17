import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AssignedRoutine } from '../../../models/assignedRoutine';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-client-training-routine',
  templateUrl: './client-training-routine.component.html',
  styleUrls: ['./client-training-routine.component.scss']
})
export class ClientTrainingRoutineComponent implements OnInit {
  id !: number;
  displayedColumns: string[] = ['id', 'name', 'duration' ,'calories', 'actions'];
  dataSource = new MatTableDataSource<AssignedRoutine>();

  futureTraining!: AssignedRoutine[];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(
    private assignedRoutineService : AssignedRoutineService, 
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.id = this.userService.userInformation.id;
    this.getTodayTrainingRoutineData();
    this.getFutureTrainingRoutineData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTodayTrainingRoutineData() {
    this.assignedRoutineService.getTodayAssignedRoutineByClientId(this.id)
    .subscribe((data: AssignedRoutine[]) =>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    });
  }
  getFutureTrainingRoutineData() {
    this.assignedRoutineService.getFutureAssignedRoutineByClientId(this.id)
    .subscribe((data: AssignedRoutine[]) =>{
        this.futureTraining = data;
    });
  }

}
