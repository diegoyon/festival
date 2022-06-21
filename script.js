// MOBILE MENU
const hamburger = document.querySelector('.mobile img');
const body = document.querySelector('body');
let menuitems = document.querySelectorAll('.desktop ul li a');
menuitems = [...menuitems];

function displaymenu() {
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';

  body.classList.add('noscroll');

  const iconx = document.createElement('img');
  iconx.className = 'iconx';
  iconx.src = './images/IconX.png';
  iconx.addEventListener('click', () => { body.classList.remove('noscroll'); body.removeChild(menu); });
  menu.appendChild(iconx);

  for (let i = 0; i < menuitems.length; i += 1) {
    menuitems[i].addEventListener('click', () => { body.classList.remove('noscroll'); body.removeChild(menu); });
    menu.appendChild(menuitems[i]);
  }

  body.appendChild(menu);
}

hamburger.addEventListener('click', displaymenu);

// DYNAMICALLY DISPLAY DJS
const djs = [
  {
    name: 'Afrojack',
    title: '#6 DJ according to DJ Magazine',
    description: 'Afrojack is a Dutch DJ, music producer and remixer from Spijkenisse. In 2007, he founded the record label Wall Recordings; his debut album Forget the World was released in 2014. He is also the CEO of LDH Europe.',
    image: './images/afrojack.jpg',
  },
  {
    name: 'Armin Van Buuren',
    title: '#3 DJ according to DJ Magazine',
    description: 'His five-time number one position in the critically acclaimed DJ Mag Top 100 DJs Poll has been the result of his loyalty to fans, his creativity in the studio, the perseverance with which he hosts his weekly radio show ‘A State Of Trance’.',
    image: './images/armin.jpg',
  },
  {
    name: 'DJ Snake',
    title: '#33 DJ according to DJ Magazine',
    description: 'DJ Snake, is a French record producer, DJ and songwriter, first achieving international recognition in 2013 by releasing an instrumentation-orientated single called "Turn Down for What" (featuring Lil Jon).',
    image: './images/snake.jpg',
  },
  {
    name: 'Carl Cox',
    title: '#27 DJ according to DJ Magazine',
    description: 'Cox has won and been nominated for numerous awards. He has performed at numerous clubs and electronic music or dance events worldwide and has served as a monthly DJ for BBC Radio 1\'s Essential Mix.',
    image: './images/carlcox.jpg',
  },
  {
    name: 'David Guetta',
    title: '#1 DJ according to DJ Magazine',
    description: 'David Guetta is a French DJ and music producer. He has over 50 million record sales globally, with more than 10 billion streams.',
    image: './images/guetta.jpg',
  },
  {
    name: 'Tiesto',
    title: '#15 DJ according to DJ Magazine',
    description: 'Tiesto is a Dutch DJ and music producer from Breda. He was voted "the Greatest DJ of All Time" by Mix magazine in a 2010/2011 poll amongst fans. In 2013, he was voted by DJ Mag readers as the "best DJ of the last 20 years".',
    image: './images/tiesto.jpg',
  },
];

const grid = document.querySelector('.grid-container');

for (let i = 0; i < djs.length; i += 1) {
  const item = document.createElement('div');
  item.className = 'grid-item';

  const img = document.createElement('img');
  img.src = djs[i].image;
  img.alt = djs[i].name;
  item.appendChild(img);

  const description = document.createElement('div');
  description.className = 'description';
  item.appendChild(description);

  const djname = document.createElement('p');
  djname.innerText = djs[i].name;
  description.appendChild(djname);

  const djtitle = document.createElement('p');
  djtitle.innerText = djs[i].title;
  description.appendChild(djtitle);

  const hr = document.createElement('hr');
  hr.className = 'dj-rule';
  description.appendChild(hr);

  const djdescription = document.createElement('p');
  djdescription.innerText = djs[i].description;
  description.appendChild(djdescription);

  grid.appendChild(item);
}