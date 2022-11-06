import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Coach } from '../models/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  basePath: string = environment.coachesPath;
  constructor(private http: HttpClient) { }
  getCoach(){
    return this.http.get<Coach[]>(this.basePath);
  }
  getCoachId(id:any){
    return this.http.get<Coach>(`${this.basePath}/${id}`);
  }
  updateCoach(id:any, coach:any){
    return this.http.put<Coach>(`${this.basePath}/${id}`, coach);
  }
  addCoach(coach:any){
    return this.http.post<Coach>(this.basePath,coach);
  }
  deleteCoach(id:any){
    return this.http.delete<Coach>(`${this.basePath}/${id}`)
  }
}
