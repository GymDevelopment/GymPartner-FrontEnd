import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from '../../../services/user.service';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-coach-statistics',
  templateUrl: './coach-statistics.component.html',
  styleUrls: ['./coach-statistics.component.scss']
})
export class CoachStatisticsComponent implements OnInit {
  chartBar: any;
  chartdoughnut: any;

  idClient !: number;
  constructor(
    private userService : UserService,
    private clientService : ClientService,
  ) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.idClient = this.userService.userInformation.id;
    this.getClient()
  }
  getClient(){
    this.clientService.callProcedureOrFunction().subscribe({
      next: (data) => {
        this.processProductResponse(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  processProductResponse(resp: any) {
    const labels: String[] = [];
    const quantity: number[] = [];

    let listCProduct = resp;
    console.log('listCProduct:', listCProduct); 

    resp.forEach((element: any) => {
      labels.push(element.physicalState);
      quantity.push(element.quantity);
    });
    //nuestro gráfico de barras
    this.chartBar = new Chart('canvas-bar', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Quantity',
            data: quantity,
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
  }
/*     //nuestro gráfico de doughnut
    this.chartdoughnut = new Chart('canvas-doughnut', {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'quantity',
            data: quantity,
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
 */
}
