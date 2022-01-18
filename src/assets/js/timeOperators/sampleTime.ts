import { fromEvent, map, sampleTime } from 'rxjs';
import { observer } from '../utils/observer';

interface pointer {
    x: number,
    y: number
}

const click$ = fromEvent(document, 'click');

click$.pipe(
    sampleTime(2000),
    map<PointerEvent, pointer>(({x,y}) => ({x,y}))
).subscribe(observer);