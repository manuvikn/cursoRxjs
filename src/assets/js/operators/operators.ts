import { filter, fromEvent, map, mapTo, pluck, range, reduce, take } from 'rxjs';


console.log("Ejemplo de operadores rxjs");


range( 1, 10 ).pipe(
    map<number,number>(item => item*10),
    filter<number>(item => (item/10) % 2 == 0),
    take<number>(4),
    reduce<number,number>((acc, val) => acc + val)
    ).subscribe((item: number) => console.log(`Número: ${item}`));


const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );


const keyUpCode$ = keyUp$.pipe(map(({code, key}) => {
    if (code.toLocaleLowerCase() === 'space') {
        key = 'Has pulsado espacio!';
    }
    return key;
}));

const keyUpPluk$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyUp$.pipe(
    mapTo('Tecla presionada')
);


keyUpCode$.subscribe(console.log);
keyUpPluk$.subscribe(console.log);
keyUpMapTo$.subscribe(console.log);