import Log from './log';
import Calc from './calc';
import img from './bird.png';

const calc = new Calc();
const log = new Log();

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);