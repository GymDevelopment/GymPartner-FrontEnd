import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  basePath:string = environment.clientPath;
  constructor(private http : HttpClient) { }
  getClient(){
    return this.http.get<Client[]>(this.basePath);
  }
  getClientId(id:any){
    return this.http.get<Client[]>(`${this.basePath}/${id}`);
  }
  addClient(client:any){
    return this.http.post<Client[]>(this.basePath, client);
  }
  deleteClient(id:any){
      return this.http.delete<Client[]>(`${this.basePath}/${id}`);
  }
  updateClient(id:any, client:any){
    return this.http.put<Client[]>(`${this.basePath}/${id}`, client);
  }
}
