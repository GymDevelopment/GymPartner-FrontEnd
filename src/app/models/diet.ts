import { Coach } from './coach';
export class Diet {
    id?:     number;
    name?:       string;
    meal?:       string;
    hour?:       number;
    calories?:   number;
    indication?: string;
    coach?:  Coach;
}