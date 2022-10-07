import { Component, OnInit, ViewChild } from '@angular/core';
import { Routine } from '../../../models/routine';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RoutineService } from '../../../services/routine.service';

@Component({
  selector: 'app-client-training-routine',
  templateUrl: './client-training-routine.component.html',
  styleUrls: ['./client-training-routine.component.scss']
})
export class ClientTrainingRoutineComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Routine>();

  training!: Routine[];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private routineService : RoutineService) { }

  ngOnInit(): void {
    this.getTrainingRoutineData();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTrainingRoutineData() {
    this.routineService.getRoutine()
    .subscribe((data: Routine[]) =>{
      {
        this.training = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

}
