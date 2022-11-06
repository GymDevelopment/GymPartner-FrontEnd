import { Gym } from './gym';
import { Coach } from './coach';
export class Client {
    id?: number;
    name?: string;
    lastName?: string;
    gym?: Gym;
    password?: string;
    email?: string;
    personalGoal?: string;
    physicalState?: string;
    birthDate?: Date;
    tall?: number;
    weight?: number;
    coach?: Coach;
    phone?: string;
  }



