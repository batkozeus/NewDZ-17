import './scss/style.scss'
import wrapper from './wrapper'
import chooseResort from './resort'
import choosePeopleResort from './people'



const root = document.querySelector('#root');
root.appendChild(wrapper);

// Task 1

chooseResort();


// Task 2

choosePeopleResort();

