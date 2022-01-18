import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, Observer, of } from 'rxjs';

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
).subscribe();

interface personaje {
    nombre: string
};

const lPersonajes: Array<personaje> = [

    {nombre: "Capitan America"},
    {nombre: "Spiderman"},
    {nombre: "Octopus"},
    {nombre: "Iron Man"},
    {nombre: "Duende"},
    {nombre: "Duende"},
    {nombre: "Capitan America"},
    {nombre: "Iron Man"},
    {nombre: "Octopus"},
    {nombre: "Octopus"},
    {nombre: "Spiderman"}

];

const oPersonaje = from(lPersonajes);

oPersonaje.pipe(
    distinctUntilChanged((p, c) => p.nombre === c.nombre)
).subscribe();

oPersonaje.pipe(
    distinctUntilKeyChanged("nombre")
).subscribe(observer);