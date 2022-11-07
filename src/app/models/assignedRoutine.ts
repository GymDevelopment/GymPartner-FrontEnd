import { Routine } from './routine';
import { Client } from './client';
import { Coach } from './coach';
export class AssignedRoutine {
    id?: number;
    routine?:  Routine;
    client?:     Client;
    coach?:     Coach;
    done?:       boolean;
    date?:       Date;
    duration?:   number;
}