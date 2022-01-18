import { combineLatest, fromEvent, map, Observable, pluck, tap } from 'rxjs';


const main = document.querySelector('#main');
const inputA = document.createElement('input');
const inputB = document.createElement('input');
const form = document.createElement('form');

inputA.placeholder = 'email@gmail.com';
inputA.classList.add('form-control');

inputB.placeholder = 'password';
inputB.classList.add('form-control');
inputB.type = 'password';

form.classList.add('d-grid', 'gap-3');
form.append(inputA, inputB);
main.append(form);


const getInputStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>( elem, 'keyup' )
.pipe(
    map<KeyboardEvent, string>((data:any) => data.target.value)
);


combineLatest(
    [getInputStream(inputA),
    getInputStream(inputB)]
).subscribe();


// EL COMBINELATEST RECIBE UN ARRAY DE OBSERVABLES Y NO EJECUTA EL SUBSCRIBE HASTA QUE
// AMBOS SE HAYAN ACTIVADO AL MENOS UNA VEZ, RETORNA UN ARRAY CON EL RESULTADO DE TODOS LOS OBSERVABLES COMBINADOS