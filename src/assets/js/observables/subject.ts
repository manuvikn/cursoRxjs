import { Observer, Subject } from 'rxjs';

const observer: Observer<string> = {
    next: console.log,
    error: console.log,
    complete: () => console.log("Complete")
};

const subject: Subject<string> = new Subject();
subject.asObservable().subscribe(observer);

subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");
subject.next("Hola mundo");

setTimeout(() => {
    subject.complete();
}, 3000);