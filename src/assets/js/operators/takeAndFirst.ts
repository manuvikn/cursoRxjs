import { first, fromEvent, Observable, Observer, range, scan, Subscriber, take } from 'rxjs';

range(1, 10).pipe(scan((acc, value) => acc + value)).subscribe();

const rangeObservable: Observable<number> = new Observable((s:Subscriber<number>) => {
    for( let i =0; i < 10; i ++) {
        s.next(i + 1);
    }
    s.complete();
});

const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};

rangeObservable.pipe(
    scan( (acc, value) => acc + value),
    take(5) 
).subscribe();


function getRange(len: number): Observable<number> {
    const rangeObservable: Observable<number> = new Observable((s:Subscriber<number>) => {
        for( let i =0; i < len; i ++) {
            s.next(i + 1);
        }
        s.complete();
    });
    return rangeObservable;    
}

getRange( 8 ).subscribe(observer);


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    first( event => event.clientY >= 150) // first que recibe un predicado
).subscribe(observer);