import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
notyf.error('Please fill out the form');
notyf.success('Your changes have been successfully saved!');

import Siema from 'siema';

import Timer from './js/timer';
import './css/styles.css';
import './css/timer.css';

const siema = new Siema({
    selector: '#gallery-1',
});

document.querySelector('.prev').addEventListener('click', () => siema.prev());
document.querySelector('.next').addEventListener('click', () => siema.next());

new Timer ({
    element: document.querySelector('#timer-1'),
    initialValue: 1,
    step: 1,
});

new Timer ({
    element: document.querySelector('#timer-2'),
    initialValue: 10,
    step: 5,
});


// console.log(basicLightbox);
// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);

//instance.show();