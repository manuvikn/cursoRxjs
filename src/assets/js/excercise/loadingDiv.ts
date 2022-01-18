import { startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';


const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const main = document.querySelector('#main');

ajax.getJSON('https://reqres.in/api/users/2?delay=4')
.pipe(
    startWith(true)
).subscribe(res => {

    console.log(res);
    
    if (res === true) main.append(loadingDiv);
    else loadingDiv.remove();

});