import { Coach } from './coach';
export class Routine {
    id?:   number;
    name?:        string;
    description?: string;
    indication?:  string;
    tips?:        string;
    url?:         string;
    coach?:   Coach;
    calories?:    number;
}