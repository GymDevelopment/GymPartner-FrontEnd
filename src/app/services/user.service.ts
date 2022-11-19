import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user !: User;
  constructor() {
    this.user = {typeUser: 'client', id : 2}
   }
  set userInformation(newUser: User){
    this.user = newUser;
  }
  set userType(newUserType: string){
    this.user.typeUser = newUserType;
  }
  get userInformation() : User{
    //return  {typeUser: 'client', id: 2};
    return this.user;
  }
}
