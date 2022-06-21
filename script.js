const hamburger = document.querySelector('.mobile img');
const body = document.querySelector('body');

let menuitems = document.querySelectorAll('.desktop ul li a')
menuitems = [...menuitems]

hamburger.addEventListener('click', displaymenu);

function displaymenu(){
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  
  body.classList.add('noscroll');

  const iconx = document.createElement('img');
  iconx.className = 'iconx';
  iconx.src = './images/IconX.png';
  iconx.addEventListener('click', ()=>{body.classList.remove('noscroll'); body.removeChild(menu)});
  menu.appendChild(iconx);

  for (let i=0; i<menuitems.length;  i++){
    menuitems[i].addEventListener('click', ()=>{body.classList.remove('noscroll'); body.removeChild(menu)});
    menu.appendChild(menuitems[i]);
  }


  body.appendChild(menu);
}