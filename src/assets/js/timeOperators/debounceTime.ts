import { debounceTime, distinctUntilChanged, fromEvent, Observer, pluck } from 'rxjs';

const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe();


const input = document.createElement('input');
const main = document.querySelector('#main');
main.append(input);

const input$ = fromEvent(input, 'input');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(observer);