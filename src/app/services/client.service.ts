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

  exportClientByCoachId(id:any) {
    const endpoint = `${this.basePath}/coaches/${id}/assignedRoutine/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob',
    });
  }

  searchByFullName(id:any, name:string, lastName:string){
    const endpoint = `${this.basePath}/coaches/${id}/clients/search/fullName?name=${name}&lastName=${lastName}`
    console.log(endpoint)
    return this.http.get<Client[]>(
      endpoint
      );
  }
  callProcedureOrFunction() {
    return this.http.get<any[]>(`${this.basePath}/client/callProcedure`);
  }

}
