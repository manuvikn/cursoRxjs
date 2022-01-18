import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, mergeAll, Observable, of, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUsers, Item } from '../utils/iterfaces';

const main = document.querySelector("#main");
const textInput = document.createElement('input');
const tarContainer = document.createElement('div');
main.append(textInput, tarContainer);

const input$ = fromEvent<InputEvent>(textInput, 'input');

const url = 'https://api.github.com/search/users?q=';


input$.pipe(
    debounceTime<InputEvent>(500),
    pluck('target', 'value'),
    filter<string>(t => t.trim() !== ''),
    distinctUntilChanged(),
    map<string, Observable<GithubUsers>>(t => ajax.getJSON(url + t)),
    mergeAll(),
    pluck('items'),
    catchError(() => of([]))
).subscribe(pintarHtml);


function pintarHtml(items: Array<Item>): void {

    tarContainer.innerHTML = '';
    tarContainer.setAttribute('class', 'tarContainer');

    items.map(({avatar_url, html_url, login}) => ({avatar: avatar_url, url: html_url, user: login}))
        .forEach(item => {

            let img = document.createElement('img');
            img.setAttribute('src', item.avatar);
            img.style.width = '100%';
            let a = document.createElement('a');
            a.setAttribute('href', item.url);
            a.setAttribute('target', '_blank');
            a.setAttribute('class', 'btn btn-primary');
            a.innerHTML = item.user;

            let tarItem = document.createElement('div');
            tarItem.setAttribute('class', 'tarItem');
            tarItem.append(img, a);
            tarContainer.append(tarItem);

        });

}