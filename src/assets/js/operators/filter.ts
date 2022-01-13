import { filter, from, range, Subscription } from 'rxjs';


// range(1, 10).pipe(filter(i => i%2==0)).subscribe(console.log);

interface personaje {
    tipo: string,
    nombre: string
};

const personajes: Array<personaje> = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },    
    {
        tipo: 'villano',
        nombre: 'Duende verde'
    },    
    {
        tipo: 'heroe',
        nombre: 'Spiderman'
    },    
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

const personajesSource: Subscription = from<Array<personaje>>(personajes).pipe( 
    filter(item=> item['tipo'] == 'villano' )
    ).subscribe(item => console.log(item.nombre));

