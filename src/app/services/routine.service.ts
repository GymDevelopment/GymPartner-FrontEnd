import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Routine } from '../models/routine';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  basePath:string = environment.routinesPath;
  constructor(private http:HttpClient) { }
  getRoutine(){
    return this.http.get<Routine[]>(this.basePath);
  }
  getRoutineId(id:any){
    return this.http.get<Routine>(`${this.basePath}/${id}`);
  }
  updateRoutine(id:any, trainer:any){
    return this.http.put<Routine>(`${this.basePath}/${id}`, trainer);
  }
  addRoutine(trainer:any){
    return this.http.post<Routine>(this.basePath, trainer);
  }
  deleteRoutine(id:any){
    return this.http.delete<Routine>(`${this.basePath}/${id}`);
  }
}
