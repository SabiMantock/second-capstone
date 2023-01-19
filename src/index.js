import render from './modules/render.js';
import './style.css';

const burger = document.querySelector('.burger-menu');
const icon = document.querySelector('.burger-menu > i');

burger.addEventListener('click', () => {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    icon.classList.replace('fa-close', 'fa-bars');
  } else {
    x.style.display = 'block';
    icon.classList.replace('fa-bars', 'fa-close');
  }
});

document.addEventListener('DOMContentLoaded', render);
