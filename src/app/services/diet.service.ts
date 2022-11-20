import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Diet } from '../models/diet';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  basePath :string = environment.apiPath;
  constructor(private http:HttpClient) { }
  getDiet(){
    return this.http.get<Diet[]>(this.basePath + "/diets");
  }
  getDietId(id:any){
    return this.http.get<Diet>(`${this.basePath}/diets/${id}`);
  }
  addDiet(diet:any){
    return this.http.post<Diet>(this.basePath + "/diets", diet);
  }
  deleteDiet(id:any){
      return this.http.delete<Diet>(`${this.basePath}/${id}`);
  }
  updateDiet(id:any, diet:any){
    return this.http.put<Diet>(`${this.basePath}/${id}`, diet);
  }
}
