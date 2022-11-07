import { Component, OnInit } from '@angular/core';
import { Coach } from '../../../models/coach';
import { CoachService } from '../../../services/coach.service';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss']
})
export class CoachProfileComponent implements OnInit {
  selectedCoach: Coach = new Coach();
  clients : Client[] = [];
  constructor(
    private coachService: CoachService,
    private clientService: ClientService

  ) { }

  ngOnInit(): void {
    this.coachService.getCoachId(2).subscribe((data: Coach) => {
      this.selectedCoach = data;
    });
    this.clientService.getClientByCoachId(2).subscribe((data: Client[]) => {
      this.clients = data;
    })
  }

}
