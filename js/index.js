// Your code goes here
const headerH1 = document.querySelector('h1.logo-heading');
const header = document.querySelector('.main-navigation');
const funBusImg = document.querySelector('.container.home .intro img');
const funBusBtn = document.querySelector('a.nav-link');
const body = document.querySelector('body');
const mainHeading = document.querySelector('.container.home .intro h2');
const letsGoH2 = document.querySelectorAll('.text-content h2')[0];
const yourMessage = document.querySelectorAll('p')[1];
const textContent  = document.querySelectorAll('.text-content')[0];
const newp = document.createElement('p');
const input = document.createElement('input');
const destination = document.querySelector('.bottom-stuff');

let scrollYHome = 0;

headerH1.addEventListener('mouseenter', (event) => {
    event.target.preventPropagation;
    event.target.style.transition = '0.3s ease-in';
    event.target.style.fontSize = '4.5rem';
    console.log('mouse has entered');
})