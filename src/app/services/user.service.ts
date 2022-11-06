import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user !: User;
  constructor() { }
  set userInformation(newUser: User){
    this.user = newUser;
  }
  get userInformation() : User{
    return this.user;
  }
}
