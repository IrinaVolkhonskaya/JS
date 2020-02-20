import Timer from './js/timer';
import './css/styles.css';
import './css/timer.css';



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