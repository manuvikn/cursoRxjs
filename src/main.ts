import { fromEvent, pluck, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { observer } from './assets/js/utils/observer';

const main = document.querySelector("#main");
const textInput = document.createElement('input');
const tarContainer = document.createElement('div');
main.append(textInput, tarContainer);

const input$ = fromEvent<InputEvent>(textInput, 'input');
const url = 'https://httpbin.org/delay/1?arg=';


input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(observer);


// SWITCHMAP RETORNA UN OBSERVABLE, NO HABRA VARIAS EJECUCIONES SIMULTANEAS DE OBSERVABLES A DIFERENCIA DE MERGEMAP Y MERGEALL
// SE MANTENDRÁ ACTIVO EL ULTIMO OBSERVABLE, LOS DEMAS SERÁN COMPLETADOS