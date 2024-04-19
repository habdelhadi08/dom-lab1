//part1
const mainE1 = document.body.querySelector('main')
mainE1.style.background= 'var(--main-bg)'
const h1= document.createElement('h1');
h1.textContent="Dom Manipulation"
mainE1.appendChild(h1);
mainE1.classList.add('flex-ctr');
//part2
const topMenuEl= document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.background= 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around');
//part3
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  menuLinks.forEach(link=> {
const menuLink= document.createElement('a')
menuLink.href = link.href;
menuLink.textContent = link.text
topMenuEl.append(menuLink)
 });
