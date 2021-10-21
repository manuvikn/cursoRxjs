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


const saludar$ = new Observable(observer => {

    for (let i = 0; i < 20; i++) {
        observer.next(`Vuelta número ${i}`);
    }

});


export function runObservables() {

    const saludarSource = saludar$.subscribe(observer);
    const intervaloSource: Subscription = intervalo$.subscribe((num: number) => {
        console.log('Num: ', num);
    });
    
    setTimeout(() => {
        intervaloSource.unsubscribe();
        saludarSource.unsubscribe();
    }, 10000);

} 