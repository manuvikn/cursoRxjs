import { Observer } from 'rxjs';

export const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};