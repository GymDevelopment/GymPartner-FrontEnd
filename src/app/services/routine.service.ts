import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Routine } from '../models/routine';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  basePath:string = environment.apiPath;
  constructor(private http:HttpClient) { }
  getRoutine(){
    return this.http.get<Routine[]>(this.basePath + "/routines");
  }
  getRoutineId(id:any){
    return this.http.get<Routine>(`${this.basePath}/routines/${id}`);
  }
  getRoutinesByCoachId(id:any){
    return this.http.get<Routine[]>(`${this.basePath}/coaches/${id}/routines`);
  }
  updateRoutine(id:any, trainer:any){
    return this.http.put<Routine>(`${this.basePath}/${id}`, trainer);
  }
  addRoutine(trainer:any){
    return this.http.post<Routine>(this.basePath + "/routines", trainer);
  }
  deleteRoutine(id:any){
    return this.http.delete<Routine>(`${this.basePath}/${id}`);
  }
}
