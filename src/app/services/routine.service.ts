import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  basePath:string = environment.routinesPath;
  constructor(private http:HttpClient) { }
  getRoutine(){
    return this.http.get<Trainer[]>(this.basePath);
  }
  getRoutineId(id:any){
    return this.http.get<Trainer[]>(`${this.basePath}/${id}`);
  }
  updateRoutine(id:any, trainer:any){
    return this.http.put<Trainer[]>(`${this.basePath}/${id}`, trainer);
  }
  addRoutine(trainer:any){
    return this.http.post<Trainer[]>(this.basePath, trainer);
  }
  deleteRoutine(id:any){
    return this.http.delete<Trainer[]>(`${this.basePath}/${id}`);
  }
}
