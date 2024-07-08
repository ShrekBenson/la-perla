import {Hero, Menu, About} from '../components';
import Logo from '../../img/logo.svg';

const CONTENT = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

export default function header() {
  const logo = new Image();
  logo.src = Logo;  

  home.addEventListener('click', function () {
    CONTENT.innerHTML = "";
    Hero();
  })
  menu.addEventListener('click', function () {
    CONTENT.innerHTML = "";
    Menu();
  })
  about.addEventListener('click', function () {
    CONTENT.innerHTML = "";
    About();
  })

  const htmlLogo = document.querySelector('.logo');
  htmlLogo.appendChild(logo);

  htmlLogo.addEventListener('click', function () {
    CONTENT.innerHTML = "";
    Hero();
  })
};