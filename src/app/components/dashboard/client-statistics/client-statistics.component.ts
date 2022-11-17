import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AssignedDietService } from '../../../services/assigned-diet.service';

@Component({
  selector: 'app-client-statistics',
  templateUrl: './client-statistics.component.html',
  styleUrls: ['./client-statistics.component.scss']
})
export class ClientStatisticsComponent implements OnInit {
  chartBar: any;
  chartdoughnut: any;
  constructor(
    private assignedDietService : AssignedDietService

  ) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {

  }
  getAssignedRoutines(){
    
  }
}
