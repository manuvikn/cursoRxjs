import { filter, map, Observer, range, take, tap } from 'rxjs';


const observer: Observer<any> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Completado")
}

range(1,5).pipe(
    tap(observer),
    map(data => data*10),
    filter(item => (item/10) %2 != 0),
    take(2),
    tap(observer)
).subscribe();