import { auditTime, fromEvent, map, tap } from 'rxjs';



const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap((tap) => console.log('tap => x:', tap.x)),
    auditTime(3000),
    map(({x}) => x)
).subscribe(console.log);


// EL OPERADOR AUDITTIME, CUANDO SE EMITE UN VALOR EMPIEZA UNA CUENTA DE X SEGUNDOS,
// EN EL SUBSCRIBE APARECERÁ EL ULTIMO VALOR COMPRENDIDO EN ESA CUENTA 