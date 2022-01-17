import { fromEvent, interval, Observer, skip, takeUntil } from 'rxjs';

const main = document.querySelector('#main');
const button = document.createElement('button');
button.textContent = 'Botón';
button.setAttribute('class', 'btn btn-success');
main.append(button);


const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click');

counter$.pipe(skip(3), takeUntil(clickBtn$)).subscribe(observer);

