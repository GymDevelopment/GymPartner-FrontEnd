import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Navbar } from '../models/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  basePath:string = environment.navbarPath;
  constructor(private http : HttpClient) { }
  getNavbar(){
    return this.http.get<Navbar[]>(this.basePath);
  }
}
