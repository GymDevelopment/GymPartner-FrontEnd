import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AssignedRoutine } from '../models/assignedRoutine';
import { Routine } from '../models/routine';

@Injectable({
  providedIn: 'root'
})
export class AssignedRoutineService {
  basePath:string = environment.apiPath;
  constructor(private http: HttpClient) { }
  getAssignedRoutine(){
    return this.http.get<AssignedRoutine[]>(this.basePath);
  }
  getAssignedRoutineId(id:any){
    return this.http.get<AssignedRoutine>(`${this.basePath}/assignedRoutines/${id}`);
  }

  getRoutineByClientId(id:any){
    return this.http.get<Routine[]>(`${this.basePath}/clients/${id}/routine`);
  }

  getAssignedRoutineByClientId(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/assignedRoutine`);
  }
  getTodayAssignedRoutineByClientId(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/todayAssignedRoutines`);
  }
  getFutureAssignedRoutineByClientId(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/futureAssignedRoutines`);
  }
  addAssignedRoutine(assignedRoutine:any){
    return this.http.post<AssignedRoutine>(this.basePath, assignedRoutine);
  }
  deleteAssignedRoutine(id:any){
      return this.http.delete<AssignedRoutine>(`${this.basePath}/${id}`);
  }
  updateAssignedRoutine(id:any, assignedRoutine:AssignedRoutine){
    return this.http.put<AssignedRoutine>(`${this.basePath}/assignedRoutines/${id}`, assignedRoutine);
  }
}
