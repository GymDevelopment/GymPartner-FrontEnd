import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietsStorageService {
  private breakfast: string = 'breakfast';
  private dinner: string = 'dinner';
  private lunch: string = 'lunch';

  constructor() {}

  get breakfastAssigned(): any {
    let aux = localStorage.getItem(this.breakfast);
    return aux ? JSON.parse(aux) : null;
  }

  get lunchAssigned(): any {
    let aux = localStorage.getItem(this.lunch);
    return aux ? JSON.parse(aux) : null;
  }

  get dinnerAssigned(): any {
    let aux = localStorage.getItem(this.dinner);
    return aux ? JSON.parse(aux) : null;
  }

  get Assigned(): boolean {
    return localStorage.getItem(this.lunch) !== null 
    && localStorage.getItem(this.breakfast) !== null 
    && localStorage.getItem(this.dinner) !== null;
  }

  set breakfastAssigned(object: any) {
    localStorage.setItem(this.breakfast, JSON.stringify(object));
  }

  set lunchAssigned(object: any) {
    localStorage.setItem(this.lunch, JSON.stringify(object));
  }

  set dinnerAssigned(object: any) {
    localStorage.setItem(this.dinner, JSON.stringify(object));
  }

  destroy(): void {
    localStorage.removeItem(this.breakfast);
    localStorage.removeItem(this.lunch);
    localStorage.removeItem(this.dinner);
  }
}
