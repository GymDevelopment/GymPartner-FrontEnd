import { Component, OnInit } from '@angular/core';
import { Coach } from '../../../models/coach';
import { CoachService } from '../../../services/coach.service';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss']
})
export class CoachProfileComponent implements OnInit {
  selectedCoach: Coach = new Coach();
  clients : Client[] = [];
  id !: Number;
  constructor(
    private coachService: CoachService,
    private clientService: ClientService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.userService.userInformation.id;
    this.coachService.getCoachId(this.id).subscribe((data: Coach) => {
      this.selectedCoach = data;
    });
    this.clientService.getClientByCoachId(this.id).subscribe((data: Client[]) => {
      this.clients = data;
    })
  }

}
