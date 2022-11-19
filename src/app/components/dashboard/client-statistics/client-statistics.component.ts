import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AssignedDietService } from '../../../services/assigned-diet.service';
import { AssignedRoutineService } from '../../../services/assigned-routine.service';
import { UserService } from '../../../services/user.service';
import { AssignedRoutine } from '../../../models/assignedRoutine';

@Component({
  selector: 'app-client-statistics',
  templateUrl: './client-statistics.component.html',
  styleUrls: ['./client-statistics.component.scss']
})
export class ClientStatisticsComponent implements OnInit {
  chartBar: any;
  chartdoughnut: any;

  idClient !: number;
  constructor(
    private assignedRoutineService : AssignedRoutineService,
    private userService : UserService,

  ) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.idClient = this.userService.userInformation.id;
    this.getAssignedRoutines()
  }
  getAssignedRoutines(){
    this.assignedRoutineService.getAssignedRoutineByClientIdReport(this.idClient).subscribe({
      next: (data) => {
        //data = data.filter(x=> x.done == true);
        //data = data.sort((a : any, b : any) => a.date?.getTime() - b.date?.getTime());
        this.processProductResponse(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  processProductResponse(resp: any) {
    const dates: Date[] = [];
    const calories: number[] = [];

    let listCProduct = resp;
    console.log('listCProduct:', listCProduct); 

    resp.forEach((element: AssignedRoutine) => {
      if(dates.indexOf(element.date ||  new Date()) != -1){
        calories[dates.indexOf(element.date || new Date())] += element.routine.calories;
      } else {
        dates.push(element.date || new Date());
        calories.push(element.routine.calories);
      }
    });
    //nuestro gráfico de barras
    this.chartBar = new Chart('canvas-bar', {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Calories',
            data: calories,
/*             pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15, */
             borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 0, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ], 
            
          },
        ],
      },
    });

    //nuestro gráfico de doughnut
    this.chartdoughnut = new Chart('canvas-doughnut', {
      type: 'doughnut',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Calories',
            data: calories,
            borderColor: '#3cba8f',

            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 0, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      },
    });
  }
}
