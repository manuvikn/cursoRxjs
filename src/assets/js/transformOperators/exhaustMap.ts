import { exhaustMap, fromEvent, interval, take } from 'rxjs';

const intervalB$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');


click$.pipe(
    exhaustMap(() => intervalB$)
)
.subscribe(console.log);




// EL EXHAUSTMAP, SOLO TENDRÁ UN OBSERVABLE ACTIVO, EN ESTE CASO, TODO OBSERVABLE QUE LLEGUE
// SERÁ IGNORADO, A DIFERENCIA DEL CONCATMAP QUE SE ALMACENA EN COLA PARA SER EJECUTADO