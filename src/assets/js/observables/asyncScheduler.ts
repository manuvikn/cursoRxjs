import { asyncScheduler, Subscription } from 'rxjs';


const saludar = () => console.log("Hola mundo");
const saludarNombre = (nombre: string) => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludarNombre, 3000, 'Manuel');

const subs: Subscription = asyncScheduler.schedule( function(state) {
    
    console.log('state', state);
    this.schedule(++state, 1000);

}, 0, 0);

asyncScheduler.schedule(() => subs.unsubscribe(), 5000);
