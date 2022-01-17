import { catchError, of, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

ajax(url).pipe(
    pluck('response'),
    catchError(err => of([]))
).subscribe();

