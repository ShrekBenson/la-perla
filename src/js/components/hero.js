import HeroImg from '../../img/hero-img.webp';

export default function hero() {
  const CONTENT = document.getElementById('content');

  const container = document.createElement('div');
  container.classList.add('hero-container');
  container.classList.add('container');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  hero.classList.add('container-sm');
  const heroImg = document.createElement('div');
  heroImg.classList.add('hero-img');  
  
  const text = document.createElement('div');
  text.classList.add('text');
  const callToAction = document.createElement('div');
  callToAction.classList.add('call-to-action');

  const heroTitle = document.createElement('h1');
  heroTitle.classList.add('hero__title');
  heroTitle.textContent = "Welcome to La Perla";
  const heroText = document.createElement('div');
  heroText.classList.add('hero__text');
  const heroTextTitle = document.createElement('h2');
  heroTextTitle.textContent = "Where the sea meets your table."
  const heroTextParagraph = document.createElement('p');
  heroTextParagraph.textContent = "Discover authentic coastal cuisine, with dishes prepared with fresh and local ingredients, come and live an unforgettable culinary experience."  
    
  const buttonToAction = document.createElement('button');
  buttonToAction.textContent = "See our Menu!";
  const titleToAction = document.createElement('h2');
  titleToAction.textContent = "You want to order?";

  text.appendChild(heroTitle);
  text.appendChild(heroText);
  heroText.appendChild(heroTextTitle);
  heroText.appendChild(heroTextParagraph);
  
  callToAction.appendChild(titleToAction);
  callToAction.appendChild(buttonToAction);

  const img = new Image();  
  img.src = HeroImg;

  hero.appendChild(text);
  hero.appendChild(callToAction);
  heroImg.appendChild(img);

  container.appendChild(hero);
  container.appendChild(heroImg);

  CONTENT.appendChild(container);
}