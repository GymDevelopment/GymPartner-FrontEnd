import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AssignedRoutine } from '../models/assignedRoutine';
import { Routine } from '../models/routine';
import { Client } from '../models/client';

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

  getClientsByRoutineId(id:any){
    return this.http.get<Client[]>(`${this.basePath}/routines/${id}/client`);
  }

  getAssignedRoutineByClientId(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/assignedRoutine`);
  }
  getAssignedRoutineByClientIdReport(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/assignedRoutineReport`);
  }
  getTodayAssignedRoutineByClientId(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/todayAssignedRoutines`);
  }
  getFutureAssignedRoutineByClientId(id:any){
    return this.http.get<AssignedRoutine[]>(`${this.basePath}/clients/${id}/futureAssignedRoutines`);
  }
  addAssignedRoutine(assignedRoutine:any){
    return this.http.post<AssignedRoutine>(this.basePath + "/assignedRoutines", assignedRoutine);
  }
  deleteAssignedRoutine(id:any){
      return this.http.delete<AssignedRoutine>(`${this.basePath}/${id}`);
  }
  updateAssignedRoutine(id:any, assignedRoutine:AssignedRoutine){
    return this.http.put<AssignedRoutine>(`${this.basePath}/assignedRoutines/${id}`, assignedRoutine);
  }
  exportAssignedRoutineByClientId(id:any) {
    const endpoint = `${this.basePath}/assignedRoutine/export/excel/${id}`;
    return this.http.get(endpoint, {
      responseType: 'blob',
    });
  }
  searchByDate(id:any, date1:string, date2:string){
    return this.http.get<AssignedRoutine[]>(
      `${this.basePath}/clients/${id}/assignedRoutine/search/date?date1=${date1}&date2=${date2}`
      );
  }
}
