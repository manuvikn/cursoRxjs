
import { fromEvent, map, pluck } from 'rxjs';


const div = document.createElement('div');
div.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ultricies erat, sed fermentum libero. Quisque vehicula libero et nulla egestas, vel blandit eros ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec nulla quis ex porttitor fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam turpis massa, hendrerit a augue ac, elementum finibus arcu. Nulla blandit massa nec lacinia bibendum. Phasellus vestibulum magna vitae blandit tempus. Vivamus consequat velit at ipsum lacinia aliquam. Fusce dapibus aliquam tellus, pretium commodo tortor porttitor ac. Cras in tincidunt libero. Mauris at lacinia augue. Nulla placerat enim in semper molestie.
<br><br>
Suspendisse nec luctus neque. Aenean tempus fermentum gravida. Sed imperdiet eu magna id bibendum. Proin interdum pharetra mauris nec vehicula. Proin at elit sit amet quam accumsan tristique. Morbi vestibulum lectus nulla, sed rhoncus nisi hendrerit non. In mollis tellus vel urna tincidunt tristique. Nunc nulla augue, venenatis ut fermentum eu, dignissim ut tortor. Suspendisse elementum hendrerit ultrices. Nullam fermentum tortor ligula, varius fringilla orci sagittis vitae.
<br><br>
Vestibulum at ultrices magna. Sed volutpat purus ac lorem porta, ut hendrerit odio hendrerit. Sed dignissim augue ac imperdiet dictum. Quisque mattis enim ut augue sollicitudin, sit amet aliquet felis pellentesque. Duis sed luctus mi. Sed est nisl, volutpat in ex vitae, efficitur blandit sem. Etiam faucibus felis sit amet ex bibendum laoreet. Phasellus non ullamcorper turpis. Proin scelerisque pharetra nunc non accumsan. Integer rhoncus ipsum condimentum erat efficitur, quis sagittis quam auctor. Donec a lectus non neque condimentum aliquet. Nullam interdum laoreet dui sit amet commodo. Morbi placerat porta mattis.
<br><br>
Mauris id vestibulum ligula. Pellentesque viverra ullamcorper magna non finibus. Nunc semper blandit dolor consectetur tincidunt. Cras libero massa, tristique in ipsum eget, sagittis euismod dolor. Morbi tempor sed justo in volutpat. Nam ullamcorper, quam egestas commodo rutrum, risus eros imperdiet dui, vitae fermentum enim nisl id augue. Quisque a egestas ante. Suspendisse vulputate urna in ipsum molestie efficitur. Sed pharetra urna nibh, sed gravida diam tempus a. Phasellus convallis purus vitae ex tincidunt, bibendum venenatis massa scelerisque. Pellentesque risus nisl, sodales sed laoreet sit amet, condimentum et erat.
<br><br>
Praesent tempus dolor quis augue cursus, non dapibus purus facilisis. Curabitur placerat velit et nunc ullamcorper elementum. Aenean mollis nulla in arcu bibendum, nec ultrices ex venenatis. Nulla facilisi. Nullam eu mauris in sem ultrices tincidunt in vitae sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu velit nibh. Ut ut porttitor erat, et interdum nisi. Proin enim odio, posuere nec hendrerit eget, tempor pharetra urna. Etiam id lobortis est, quis auctor turpis. Nunc mollis lectus ut consectetur ornare. Nulla magna tellus, porttitor at felis in, imperdiet tempor mauris. Mauris elementum felis eros, at laoreet nisl semper eu. In hac habitasse platea dictumst. Donec eget ipsum massa.`;

document.body.append(div);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
document.body.append(progressBar);


const scroll$ = fromEvent(document, 'scroll');

const calcularPorcentajeScroll = ({scrollTop, scrollHeight, clientHeight}:any) => {
    return ( scrollTop / ( scrollHeight - clientHeight ) * 100 );
};


scroll$.pipe(
    pluck('target', 'documentElement'),
    map(calcularPorcentajeScroll)
    ).subscribe( porcentaje => progressBar.style.width = `${porcentaje}%`);

