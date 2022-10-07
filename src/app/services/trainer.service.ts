import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  basePath: string = environment.trainersPath;
  constructor(private http: HttpClient) { }
  getTrainer(){
    return this.http.get<Trainer[]>(this.basePath);
  }
  getTrainerId(id:any){
    return this.http.get<Trainer[]>(`${this.basePath}/${id}`);
  }
  updateTrainer(id:any, trainer:any){
    return this.http.put<Trainer[]>(`${this.basePath}/${id}`, trainer);
  }
  addTrainer(trainer:any){
    return this.http.post<Trainer[]>(this.basePath,trainer);
  }
  deleteTrainer(id:any){
    return this.http.delete<Trainer[]>(`${this.basePath}/${id}`)
  }
}
