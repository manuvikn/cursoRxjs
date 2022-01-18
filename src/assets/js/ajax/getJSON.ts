import { ajax } from 'rxjs/ajax';

const u = 'https://httpbin.org/delay/1';

ajax.getJSON(u, {
    'Content-Type': 'application/json',
    'token': 'token123'
})
.subscribe();