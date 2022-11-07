import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Gym } from '../models/gym';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  basePath:string = environment.apiPath + "/gyms";
  constructor(private http: HttpClient) { }
  getGyms(){
    return this.http.get<Gym[]>(this.basePath);
  }
}
