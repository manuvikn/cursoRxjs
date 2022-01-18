import { delay, forkJoin, interval, of, range, take } from 'rxjs';


const range$ = range(1, 5);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c', 'd').pipe(delay(3500));


// PASANDO UN ARRAY COMO PARAMETRO

// forkJoin([range$, interval$, letras$]).pipe(
// ).subscribe(res => {
//     res.forEach(console.log);
// });


// PASANDO UN OBJETO COMO PARAMETRO

forkJoin({range$, interval$, letras$}).pipe(
).subscribe(console.log);