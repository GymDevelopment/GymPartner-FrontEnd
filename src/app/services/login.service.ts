import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  basePath:string = environment.apiPath;
  constructor(private http : HttpClient) {
   }

   signInClient(login: Login): any {
    return this.http.post(`${this.basePath}/client/signIn`, login);
  }
  signInCoach(login: Login): any {
    return this.http.post(`${this.basePath}/coach/signIn`, login);
  }
}
