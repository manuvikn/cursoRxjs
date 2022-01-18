import { distinct, distinctUntilChanged, Observer, of } from 'rxjs';

const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};

const ln = of( 1,2,'2',3,'2',4,5,'4',6,7, '7',8,9 );

ln.pipe(
    distinct(v => v.toString())
).subscribe();

ln.pipe(
    distinctUntilChanged((p, c) => p == c) 
).subscribe(observer);

