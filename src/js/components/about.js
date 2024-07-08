import AboutImg from '../../img/about-img-title.jpg'
import MainImg from '../../img/MichelinStar.svg';

export default function about() {
  const CONTENT = document.getElementById('content');

  const about = document.createElement('div');
  about.classList.add('about');
  about.classList.add('container');

  const title = document.createElement('div');
  title.classList.add('about-title');
  title.style.backgroundImage = `url(${AboutImg})`;

  const titleHeading = document.createElement('h1');
  titleHeading.textContent = "Our Oceanic Journey";
  const titleText = document.createElement('p');
  titleText.textContent = "we bring the ocean's bounty to your plate. Our passion for fresh, sustainable seafood drives us to create delicious dishes inspired by coastal traditions."

  const main = document.createElement('div');
  main.classList.add('main');
  main.classList.add('container-sm');
  const mainText = document.createElement('div');
  mainText.classList.add('main__text');
  const text1 = document.createElement('p');
  const text2 = document.createElement('p');
  const text3 = document.createElement('p');
  text1.textContent = `Mauris placerat arcu augue, nec semper arcu eleifend nec. Proin in diam et sem aliquet convallis eu vel turpis. Nunc luctus mi in tortor laoreet, id vestibulum nisi hendrerit. Cras pulvinar metus tortor, at sollicitudin elit pharetra at. Cras tincidunt congue nulla vel vehicula. Integer nec felis malesuada, volutpat eros id, malesuada ipsum. Quisque consectetur, erat ut venenatis scelerisque, lacus justo dignissim nisl, ac pharetra elit lectus vitae nunc. Mauris quis ultrices dui. Mauris vel fringilla libero, nec eleifend arcu. Praesent convallis ex eu viverra ornare. Donec eu lacinia lorem.`
  text2.textContent += `Cras dignissim viverra ipsum et suscipit. Ut pharetra nulla ac eros sagittis, ut imperdiet mauris tincidunt. Pellentesque ut molestie tellus, ac mattis ligula. Vestibulum convallis ligula quis rhoncus vulputate. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis posuere nunc magna, non facilisis odio pretium varius. Ut gravida, dolor et blandit fringilla.`;
  text3.textContent += `Curabitur id nulla quis dolor lacinia vestibulum pellentesque nec purus. Nullam nec viverra quam. Ut tempus faucibus dui. Nulla odio nunc, rutrum sed consectetur eu, tempor eget augue.`;
  const mainImg = document.createElement('div');
  mainImg.classList.add('main__img');
  const img = new Image();
  img.src = MainImg;

  title.appendChild(titleHeading);
  title.appendChild(titleText);

  main.appendChild(mainText);
  main.appendChild(mainImg);
  mainText.appendChild(text1);
  mainText.appendChild(text2);
  mainText.appendChild(text3);
  mainImg.appendChild(img);

  about.appendChild(title);
  about.appendChild(main);

  CONTENT.appendChild(about);
}