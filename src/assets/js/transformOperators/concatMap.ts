import { concatMap, filter, fromEvent, interval, switchMap, take, takeUntil } from 'rxjs';


// PRIMER EJEMPLO CON CONCATMAP

const keyPress$ = fromEvent<KeyboardEvent>(document, 'keypress')
.pipe(
    filter(event => event.code === 'Space')
);

const interval$ = interval(1000)
.pipe(
    takeUntil(keyPress$)
);

interval$.pipe(
    concatMap(() => interval$)
)
//.subscribe(console.log);


// SEGUNDO EJEMPLO CON CONCATMAP


const intervalB$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');


click$.pipe(
    concatMap(() => intervalB$)
)
.subscribe();