import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, Observer, pluck, throttleTime } from 'rxjs';

const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
).subscribe();


const input = document.createElement('input');
const main = document.querySelector('#main');
main.append(input);

const input$ = fromEvent(input, 'input');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(observer);