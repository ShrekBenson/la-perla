import menuImg from '../../img/menu-img.jpg';

const itemNames = [
  "Sauvignon Blanc-Steamed Mussels with Garlic Toast",
  "Roasted Branzino with Caper Butter",
  "Crispy Crab Cakes with Tomato Butter",
  "Seared Tuna with Soy and Red Chiles",
  "Mussels with Harissa and Basil"
];

const itemDescriptions = [
  "Add this steamed mussels recipe — inspired by the ubiquitous specialty in Belgium — to your repertoire of elegant, flavor-forward dishes that are table-ready in a flash.",
  "Whole branzino roasted with lemon and rosemary is a foolproof way to ensure flavorful, perfectly cooked fish. Steve Corry takes the dish over the top with a caper compound butter.",
  "The late chef Patrick Clark's crab cakes at Tavern on the Green were legendary, taking on a pop of flavor from chopped fresh jalapeño and a crispy exterior from panko.",
  "Soy sauce, sesame oil, scallion, garlic, and dried chiles are combined with chicken stock to make an intense and delicious sauce for the seared tuna.",
  "Toasted walnuts are a surprise addition to the creamy, smoky red pepper puree that gets swirled into these harissa-spiked steamed mussels. Anisey Thai basil and salty-sour pickled onions compliment the sweet, plump mussels."
];

export default function menu() {
  const CONTENT = document.getElementById('content');

  const presentation = document.createElement('div');
  presentation.classList.add('presentation');
  presentation.classList.add('container');

  const presentationImg = document.createElement('div');
  presentationImg.classList.add('presentation__img');
  presentationImg.style.backgroundImage = `url(${menuImg})`;

  const slabs = document.createElement('div');
  slabs.classList.add('slabs');
  const presentationSlab1 = document.createElement('div');
  const slab1 = document.createElement('p');
  presentationSlab1.classList.add('presentation__slab');
  presentationSlab1.classList.add('slab-1');
  slab1.textContent = 'Menu';
  const presentationSlab2 = document.createElement('div');
  const slab2 = document.createElement('p');
  presentationSlab2.classList.add('presentation__slab');
  presentationSlab2.classList.add('slab-2');
  slab2.textContent = 'Order now';

  const presentationText = document.createElement('div');
  presentationText.classList.add('presentation__text');
  presentationText.classList.add('container-lg');
  const text = document.createElement('p');
  text.textContent = "Whether it's the season for a warm bowl of cioppino or a platter of crispy, honey-drizzled tuna croquettes, we have seafood for every occasion"

  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.classList.add('container-sm');
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu__container');
  
  const menuRow = document.createElement('div');
  menuRow.classList.add('menu__row');
  menuRow.classList.add('title');

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu__info');
  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menu__title');
  const info = document.createElement('p');
  info.textContent = "5% surcharge will be added to all guest checks for employee benefit, including health insurance, commuter benefit, sick days, and minimum wage ordinance."
  const schedule = document.createElement('p');
  schedule.textContent = "Available Saturday & Sunday from 3:00-5:00pm.";
  const title = document.createElement('h1');
  title.textContent = "Menu"
  const subTitle = document.createElement('h2');
  subTitle.textContent = "First"

  menuInfo.appendChild(info);
  menuInfo.appendChild(schedule);
  menuTitle.appendChild(title);
  menuTitle.appendChild(subTitle);

  menuRow.appendChild(menuInfo);
  menuRow.appendChild(menuTitle);
  menuContainer.appendChild(menuRow);

  for (let i = 0; i < 5; i ++) {
    const menuRow = document.createElement('div');
    menuRow.classList.add('menu__row');
    const itemName = document.createElement('h2');    
    itemName.textContent = itemNames[i];
    const itemDescription = document.createElement('p');
    itemDescription.textContent = itemDescriptions[i];
    const itemPrice = document.createElement('h3');
    itemPrice.textContent = `$${(Math.random() * 100).toFixed(2)}`;

    menuRow.appendChild(itemName);
    menuRow.appendChild(itemDescription);
    menuRow.appendChild(itemPrice);

    menuContainer.appendChild(menuRow);
  }

  presentationSlab1.appendChild(slab1);
  presentationSlab2.appendChild(slab2);
  slabs.appendChild(presentationSlab1);
  slabs.appendChild(presentationSlab2);

  presentationText.appendChild(text);

  presentation.appendChild(presentationImg);
  presentation.appendChild(presentationText);
  presentation.appendChild(slabs);

  menu.appendChild(menuContainer);

  CONTENT.appendChild(presentation);
  CONTENT.appendChild(menu);
}