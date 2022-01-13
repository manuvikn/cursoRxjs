import { asyncScheduler, Observable, range } from 'rxjs';
// import 'bootstrap';


// const range$: Observable<number> =  range(1, 10, asyncScheduler);
const range$: Observable<number> =  range(1, 10);

console.log("Inicio");
range$.subscribe(console.log);
console.log("Fin");
