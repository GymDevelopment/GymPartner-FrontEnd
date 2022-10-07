import { Injectable } from '@angular/core';
import { AssignedTraining } from '../models/assignedTraining';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AssignedTrainingService {
  basePath:string = environment.assignedTrainingPath
  constructor(private http: HttpClient) { }
  getAssignedTraining(){
    return this.http.get<AssignedTraining[]>(this.basePath);
  }
  getAssignedTrainingId(id:any){
    return this.http.get<AssignedTraining[]>(`${this.basePath}/${id}`);
  }
  addAssignedTraining(assignedTraining:any){
    return this.http.post<AssignedTraining[]>(this.basePath, assignedTraining);
  }
  deleteAssignedTraining(id:any){
      return this.http.delete<AssignedTraining[]>(`${this.basePath}/${id}`);
  }
  updateAssignedTraining(id:any, assignedTraining:AssignedTraining[]){
    return this.http.put<AssignedTraining[]>(`${this.basePath}/${id}`, assignedTraining);
  }
}
