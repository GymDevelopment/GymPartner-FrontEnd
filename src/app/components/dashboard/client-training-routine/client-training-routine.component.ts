import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AssignedRoutine } from '../../../models/assignedRoutine';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';
import { UserService } from '../../../services/user.service';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-training-routine',
  templateUrl: './client-training-routine.component.html',
  styleUrls: ['./client-training-routine.component.scss']
})
export class ClientTrainingRoutineComponent implements OnInit {
  maxEnd: Date = new Date();
  id !: number;
  form !: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'duration' ,'calories', 'actions'];
  dataSource = new MatTableDataSource<AssignedRoutine>();

  futureTraining!: AssignedRoutine[];


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(
    private assignedRoutineService : AssignedRoutineService, 
    private userService: UserService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.createForm()
    this.id = this.userService.userInformation.id;
    this.getTodayTrainingRoutineData();
    this.getFutureTrainingRoutineData();
  }
  createForm(){
    this.form = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
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
  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  exportExcel(){
    this.assignedRoutineService.exportAssignedRoutineByClientId(this.id)
    .subscribe(
      (data: any) => {
        let file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = 'assignedRoutines.xlsx';
        anchor.href = fileUrl;
        anchor.click();

        this.openSnackBar('Archivo exportado correctamente', 'Exitosa');
      },
      (error: any) => {
        this.openSnackBar('No se pudo exportar el archivo', 'Error');
      }
    );
  }

  search() {
      let auxDate1 : Date= this.form.value['startDate'];
      let auxDate2 : Date= this.form.value['endDate'];
      let date1 = auxDate1.getFullYear().toString() + '-' + (auxDate1.getMonth() + 1).toString() + '-' + auxDate1.getDate().toString();
      let date2 = auxDate2.getFullYear().toString() + '-' + (auxDate2.getMonth() + 1).toString() + '-' + auxDate2.getDate().toString();
      this.assignedRoutineService
        .searchByDate(this.id,  date1, date2)
        .subscribe((data) => {
          this.futureTraining = data;
        });
  }

}
