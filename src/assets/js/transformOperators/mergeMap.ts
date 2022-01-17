import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from 'rxjs';


const letras$ = of('a', 'b', 'c', 'd');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3))
    )
)
//.subscribe();

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();


mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe();