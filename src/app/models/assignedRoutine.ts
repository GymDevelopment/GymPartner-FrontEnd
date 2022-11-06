import { Routine } from './routine';
import { Client } from './client';
export class AssignedRoutine {
    id?: number;
    routine?:  Routine;
    client?:     Client;
    done?:       boolean;
    duration?:   number;
    date?:       Date;
}