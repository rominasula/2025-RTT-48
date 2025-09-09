

//  Part 1: Setup <main> 

// 1. Select and cache the <main> element
const mainEl = document.querySelector('main');

// 2. Set background color using the CSS variable
mainEl.style.backgroundColor = 'var(--main-bg)';

// 3. Set inner content to an <h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// 4. Add the class 'flex-ctr' to center the content
mainEl.classList.add('flex-ctr');


// Part 2: Setup <nav id="top-menu"> 

// 1. Select the <nav id="top-menu"> element
const topMenuEl = document.getElementById('top-menu');

// 2. Set height to 100%
topMenuEl.style.height = '100%';

// 3. Set background color using the CSS variable
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 4. Add the 'flex-around' class
topMenuEl.classList.add('flex-around');

// Part 3: Add Menu Buttons

var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Loop through menuLinks and build <a> tags
menuLinks.forEach(link => {
  // 1. Create an <a> element
  const aEl = document.createElement('a');

  // 2. Set the href attribute
  aEl.setAttribute('href', link.href);

  // 3. Set the visible text content
  aEl.textContent = link.text.toUpperCase(); 

  // 4. Append to topMenuEl
  topMenuEl.appendChild(aEl);
});
