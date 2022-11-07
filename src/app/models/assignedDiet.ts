import { Client } from './client';
import { Diet } from './diet';
import { Coach } from './coach';
export class AssignedDiet {
    id?: number;
    breakfast?:     Diet;
    lunch?:     Diet;
    dinner?:     Diet;
    client?:     Client;
    date?:       Date;
    coach?: Coach;
    done?:       boolean;
}