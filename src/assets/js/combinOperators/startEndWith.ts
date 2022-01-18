import { endWith, range, startWith } from 'rxjs';


const range$ = range(1, 5);

range$.pipe(
    startWith(0),
    endWith(6)
).subscribe(console.log);