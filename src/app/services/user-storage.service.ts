import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private key: string = 'ng-auth';

  constructor() {}

  get user(): any {
    let user = localStorage.getItem(this.key);
    return user ? JSON.parse(user) : null;
  }

  get isAuthenticated(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  set user(object: any) {
    localStorage.setItem(this.key, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.key);
  }
}
