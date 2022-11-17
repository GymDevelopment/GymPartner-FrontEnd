import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-coach-clients',
  templateUrl: './coach-clients.component.html',
  styleUrls: ['./coach-clients.component.scss']
})
export class CoachClientsComponent implements OnInit {
  clients : Client[] = [];
  id !: Number;
  constructor(
    private clientService: ClientService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.userService.userInformation.id;
    this.clientService.getClientByCoachId(this.id).subscribe((data: Client[]) => {
      this.clients = data;
    })
  }

}
