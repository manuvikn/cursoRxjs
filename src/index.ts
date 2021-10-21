import './scss/main.scss';
import 'jquery/dist/jquery';
import '@popperjs/core/dist/umd/popper'
import 'bootstrap';

import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.info('Completado')
};

const intervalo$: Observable<number> = new Observable<number>( subscriber => {

    let contador: number = 0;

    setInterval(() => {
        subscriber.next(contador);
        ++contador;
    }, 1000);
} );

const intervaloSource: Subscription = intervalo$.subscribe((num: number) => {
    console.log('Num: ', num);
});

setTimeout(() => {
    intervaloSource.unsubscribe();
}, 10000);