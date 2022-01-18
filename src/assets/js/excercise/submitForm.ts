import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// HELPER

const peticionHTTPLogin = ( userPass: any ) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
                                                .pipe(
                                                    pluck('response', 'token'),
                                                    catchError(error => of('Error en la petición'))
                                                );


// CREANDO UN FORMULARIO

const main = document.querySelector('#main');
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');


// CONFIGURACIONES

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';
inputEmail.setAttribute('class', 'form-control');


inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';
inputPass.setAttribute('class', 'form-control');


submitBtn.setAttribute('class', 'btn btn-success');
submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
form.setAttribute('class', 'd-grid gap-4')
main.append(form);


// STREAMS

const submitForm$ = fromEvent<SubmitEvent>(form, 'submit');

submitForm$.pipe(
    tap(ev => ev.preventDefault()),
    map((ev: any) => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    exhaustMap(peticionHTTPLogin)
).subscribe(console.log);