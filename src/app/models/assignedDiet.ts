import { Client } from './client';
import { Diet } from './diet';
export class AssignedDiet {
    id?: number;
    diet?:     Diet;
    client?:     Client;
    done?:       boolean;
    day?:        string;
    date?:       Date;
}