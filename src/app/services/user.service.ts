import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserStorageService } from './user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user !: User;
  constructor(
    private userStorageService: UserStorageService
  ) {
    this.user = this.userStorageService.user;
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
