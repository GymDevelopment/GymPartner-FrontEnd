import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-coach-clients',
  templateUrl: './coach-clients.component.html',
  styleUrls: ['./coach-clients.component.scss']
})
export class CoachClientsComponent implements OnInit {
  clients : Client[] = [];
  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getClientByCoachId(2).subscribe((data: Client[]) => {
      this.clients = data;
    })
  }

}
