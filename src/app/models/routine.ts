import { Coach } from './coach';
export class Routine {
    id?:   number;
    name?:        string;
    description?: string;
    indication?:  string;
    tips?:        string;
    calories?:    number;
    url?:         string;
    coach?:   Coach;
}