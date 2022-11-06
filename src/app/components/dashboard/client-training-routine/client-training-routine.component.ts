import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AssignedRoutine } from '../../../models/assignedRoutine';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';

@Component({
  selector: 'app-client-training-routine',
  templateUrl: './client-training-routine.component.html',
  styleUrls: ['./client-training-routine.component.scss']
})
export class ClientTrainingRoutineComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration' ,'calories', 'actions'];
  dataSource = new MatTableDataSource<AssignedRoutine>();

  futureTraining!: AssignedRoutine[];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private assignedRoutineService : AssignedRoutineService) { }

  ngOnInit(): void {
    this.getTrainingRoutineData();
    this.getFutureTrainingRoutineData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTrainingRoutineData() {
    this.assignedRoutineService.getTodayAssignedRoutineByClientId(2)
    .subscribe((data: AssignedRoutine[]) =>{
        console.log(data)
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
    });
  }
  getFutureTrainingRoutineData() {
    this.assignedRoutineService.getFutureAssignedRoutineByClientId(2)
    .subscribe((data: AssignedRoutine[]) =>{
        console.log(data)
        this.futureTraining = data;
    });
  }

}
