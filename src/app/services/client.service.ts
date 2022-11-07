import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //basePath:string = environment.clientPath;
  basePath:string = environment.apiPath;
  constructor(private http : HttpClient) { }
  getClient(){
    return this.http.get<Client[]>(this.basePath + "/clients");
  }
  getClientId(id:any) {
    return this.http.get<Client>(`${this.basePath}/clients/${id}`);
  }
  getClientByCoachId(id:any){
    return this.http.get<Client[]>(`${this.basePath}/coaches/${id}/clients`);
  }
  addClient(client:any){
    return this.http.post<Client>(this.basePath + "/clients", client);
  }
  deleteClient(id:any){
      return this.http.delete<Client>(`${this.basePath}/clients/${id}`);
  }
  updateClient(id:any, client:any){
    return this.http.put<Client>(`${this.basePath}/clients/${id}`, client);
  }
}
