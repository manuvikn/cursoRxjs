import { ajax } from 'rxjs/ajax';

const u = 'https://httpbin.org/delay/1';

ajax.get(u).subscribe();
