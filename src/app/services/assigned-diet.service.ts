import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AssignedDiet } from '../models/assignedDiet';

@Injectable({
  providedIn: 'root'
})
export class AssignedDietService {
  basePath:string = environment.assignedDietsPath
  constructor(private http: HttpClient) { }
  getAssignedDiet(){
    return this.http.get<AssignedDiet[]>(this.basePath);
  }
  getAssignedDietId(id:any){
    return this.http.get<AssignedDiet>(`${this.basePath}/${id}`);
  }
  addAssignedDiet(assignedDiet:any){
    return this.http.post<AssignedDiet>(this.basePath, assignedDiet);
  }
  deleteAssignedDiet(id:any){
      return this.http.delete<AssignedDiet>(`${this.basePath}/${id}`);
  }
  updateAssignedDiet(id:any, assignedDiet:AssignedDiet){
    return this.http.put<AssignedDiet>(`${this.basePath}/${id}`, assignedDiet);
  }
}
