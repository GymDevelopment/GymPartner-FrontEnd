import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { UserService } from '../../../services/user.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
})
export class ClientProfileComponent implements OnInit {
  selectedClient: Client = new Client();
  id!:Number;
  constructor(
    private clientService: ClientService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.userService.userInformation.id;
    this.clientService.getClientId(this.id).subscribe((data: Client) => {
      this.selectedClient = data;
    });
  }
}
