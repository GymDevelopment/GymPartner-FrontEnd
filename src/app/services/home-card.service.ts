import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HomeCard } from '../models/homeCard';

@Injectable({
  providedIn: 'root'
})
export class HomeCardService {
  basePath: string = environment.homeCardPath;
  constructor(private http:HttpClient) { }
  getHomeCard(){
    return this.http.get<HomeCard[]>(this.basePath);
  }
}
