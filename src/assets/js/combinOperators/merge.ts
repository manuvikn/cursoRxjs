import { interval, merge, skip, take } from 'rxjs';


const interval$ = interval(1000);

merge(
    interval$.pipe(
        skip(4),
        take(4)
    ),
    interval$.pipe(take(6))
).subscribe();
