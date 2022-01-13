import { from, Observer, of } from 'rxjs';


const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Completado")
};

/* from( fetch('https://api.github.com/users/manuvikn')
        .then(data => data.json()) ).subscribe(observer); */

const generator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const iterable = generator();


from(iterable).subscribe(observer);