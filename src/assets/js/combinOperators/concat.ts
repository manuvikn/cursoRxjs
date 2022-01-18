import { concat, interval, take } from 'rxjs';



const interval$ = interval(1000);

concat(
    interval$.pipe(take(4)),
    interval$.pipe(take(4)),
    interval$.pipe(take(4))
).subscribe(console.log);