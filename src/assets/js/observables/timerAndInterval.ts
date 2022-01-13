import { interval, Observer, Subscription, timer } from 'rxjs';


const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Completado")
}

const interval$ = interval(1000); 

console.log("Inicio");

const intervalSource: Subscription = interval$.subscribe(console.log, console.error, () => console.log("completado"));
setTimeout(() => {
    intervalSource.unsubscribe();
}, 5000);


console.log("Final");

const inFiveSeconds = new Date();
inFiveSeconds.setSeconds( inFiveSeconds.getSeconds() + 5 );

const timer$ = timer(inFiveSeconds);

timer$.subscribe(observer);