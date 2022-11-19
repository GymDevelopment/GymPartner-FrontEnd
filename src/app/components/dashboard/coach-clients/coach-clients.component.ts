import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
import { UserService } from '../../../services/user.service';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coach-clients',
  templateUrl: './coach-clients.component.html',
  styleUrls: ['./coach-clients.component.scss']
})
export class CoachClientsComponent implements OnInit {
  clients : Client[] = [];
  id !: Number;
  form: FormGroup;
  constructor(
    private clientService: ClientService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.id = this.userService.userInformation.id;
    this.clientService.getClientByCoachId(this.id).subscribe((data: Client[]) => {
      this.clients = data;
    })
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
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
    this.clientService.exportClientByCoachId(this.id)
    .subscribe(
      (data: any) => {
        let file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        let fileUrl = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = 'clients.xlsx';
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
      let name = this.form.value['name'];
      let lastName  = this.form.value['lastName'];
      if(name == ""){
        name = null;
      }
      if(lastName == ""){
        lastName = null;
      }
      if(name == null && lastName == null){
        name = lastName = "";
      }
      console.log(name)
      console.log(lastName)
      this.clientService
        .searchByFullName(this.id, name, lastName)
        .subscribe((data) => {
          console.log(data)
          this.clients = data;
      });
  }

}
