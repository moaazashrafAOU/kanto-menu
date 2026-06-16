const menuData = [
  {
    id:'kanto-retro-97',
    title:'Kanto Retro 97',
    image:'mix-match.webp',
    doodle:'cassette.svg',
    isNew:true,
    kicker:'New retro drop',
    subtitle:'Signature Summer Collection',
    items:[
['Retro Pop 97','100 LE','Mango Boba - Chocolate - Blueberry'],
['Sunset Cassette','100 LE','Passion Fruit - Mango - Vanilla - Coconut - Lemon'],
['Peach Ride 97','100 LE','Passion Fruit - Pineapple - Peach - Vanilla'],
['Old Melon Vibe','100 LE','Cantaloupe - Vanilla'],
['Blue Radio 97','90 LE','Passion Fruit - Blueberry'],
['Kanto 97','120 LE','White Pistachio Milkshake'],
['Walkman Mix','100 LE','Kiwi - Pineapple - Banana']    ]
  },
  { id:'kold-coffee', title:'Kold Coffee', image:'kold-coffee.webp', doodle:'waves.svg', items:[['Iced Latte','75 LE'],['Iced Latte Hazelnut / Vanilla','90 LE'],['Iced Spanish Latte','95 LE'],['Iced Dark Mocha','100 LE'],['Iced White Mocha','110 LE'],['Iced Caramel','90 LE'],['Iced Salted Caramel','95 LE'],['Iced Americano','70 LE']]},
{ id:'hot-coffee', title:'Hot Coffee', image:'hot-coffee.webp', doodle:'camera.svg', items:[['Turkish Coffee','40 LE'],['French Coffee','55 LE'],['Hazelnut Coffee','55 LE'],['Nutella Coffee','55 LE'],['Caramel Coffee','55 LE'],['Espresso S/D','40-55 LE'],['Macchiato','50-60 LE'],['Latte','70 LE'],['Spanish Latte','90 LE'],['Cappuccino','70 LE'],['White Mocha','95 LE'],['Dark Mocha','90 LE'],['Flat White','60 LE'],['Cortado','60 LE'],['Nescafé M/L','55-65 LE']]},
{ id:'frappee', title:'Frappee', image:'frappee.webp', doodle:'sun.svg', items:[['Frappe Latte','75 LE'],['Frappe Caramel','95 LE'],['Frappe White Mocha','115 LE'],['Frappe Dark Mocha','100 LE'],['Frappe Vanil','95 LE'],['Spanish Frappe','105 LE']]},
{ id:'freshies', title:'Freshies', image:'freshies.webp', doodle:'palm.svg', items:[['Mango','75 LE'],['Watermelon','75 LE'],['Banana','70 LE'],['Pineapple','80 LE'],['Blueberry','80 LE'],['Strawberry','75 LE'],['Peach','85 LE'],['Orange','70 LE'],['Lemon','60 LE'],['Kiwi','100 LE']]},
{ id:'mix-match', title:'Mix & Match', image:'mix-match.webp', doodle:'sparkles.svg', items:[['Mango & Peach','90 LE'],['Mango & Passion Fruit','100 LE'],['Mango & Kiwi','100 LE'],['Pineapple & Peach','90 LE'],['Pina Colada','90 LE'],['Strawberry & Blueberry','90 LE'],['Pineapple & Kiwi','100 LE'],['Strawberry & Banana','80 LE'],['Orange & Kiwi','100 LE'],['Lemon Mint','65 LE']]},
{ id:'mojitos', title:'Mojitos', image:'mojitos.webp', doodle:'birds.svg', items:[['Mojito Classic','90 LE'],['Mojito Blue Curacao','90 LE'],['Mojito Pineapple','90 LE'],['Mojito Passion Fruit','90 LE'],['Mojito Blueberry','90 LE'],['Mojito Peach','90 LE']]},
{ id:'matcha', title:'Matcha Corner', image:'matcha.webp', doodle:'shell.svg', items:[['Matcha Classic','90 LE'],['Spanish Matcha','105 LE'],['Strawberry Matcha','105 LE'],['Mango Matcha','105 LE'],['Vanilla Matcha','100 LE']]},
{ id:'milk-shakes', title:'Milk Shakes', image:'milk-shakes.webp', doodle:'sun.svg', items:[['Snickers','100 LE'],['Mango','100 LE'],['Vanilla','100 LE'],['Chocolate','100 LE'],['Kinder','100 LE'],['Strawberry & Blueberry','100 LE'],['Oreo Chocolate','100 LE']]},
{ id:'desserts', title:'Desserts', image:'desserts.webp', doodle:'postcard.svg', items:[['Pancakes','70 LE'],['Pistachio Pancake','80 LE'],['Pistachio Bomb','100 LE'],['Chocolate Volcano','95 LE'],['Chocolate Molten','95 LE'],['Kanto Cake','100 LE'],['Chocolate Cake','85 LE'],['Red Velvet Cake','80 LE'],['Honey Cake','80 LE'],['Brownies','75 LE']]},
{ id:'soft-drinks', title:'Soft Drinks', image:'soft-drinks.webp', doodle:'cassette.svg', items:[['Water','10 LE'],['Pepsi','45 LE'],['7UP','45 LE'],['Red Bull','80 LE']]},
{ id:'extras', title:'Extras', image:'kold-coffee.webp', doodle:'ticket.svg', items:[['Coconut Milk','20 LE'],['Oat Milk','20 LE'],['Almond Milk','20 LE'],['Lactose-Free Milk','20 LE'],['Espresso Shot','20 LE'],['Whipped Cream','20 LE'],['Extra Flavor','20 LE'],['Ice Cup','5 LE'],['Boba','30 LE']]}
];

const tabs = document.getElementById('categoryTabs');
const flow = document.getElementById('menuFlow');
const tilts = ['-1.2deg','1deg','-.45deg','1.4deg','-.8deg','.65deg'];

menuData.forEach((cat, index) => {
  const button = document.createElement('button');
  button.className = `ticket-tab ${cat.isNew ? 'new-tab' : ''}`;
  button.innerHTML = `<span class="tab-title">${cat.title}</span>${cat.isNew ? '<span class="tab-new-label">NEW</span>' : ''}`;
  button.dataset.target = cat.id;
  button.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
  tabs.appendChild(button);

  const card = document.createElement('article');
  card.className = `menu-card reveal ${index % 2 ? 'reverse' : ''} ${cat.isNew ? 'retro-new-card' : ''}`;
  card.id = cat.id;
  card.style.setProperty('--tilt', tilts[index % tilts.length]);
  card.innerHTML = `
    <div class="menu-box">
      ${cat.isNew ? '<span class="new-ribbon">NEW DROP</span>' : ''}
      <p class="card-kicker">${cat.kicker || `Summer ticket ${String(index+1).padStart(2,'0')}`}</p>
      <h3>${cat.title}</h3>
      ${cat.subtitle ? `<p class="category-subtitle">${cat.subtitle}</p>` : ''}
      <ul>${cat.items.map(([name, price, desc]) => `<li class="menu-item ${desc ? 'has-desc' : ''}"><span class="name">${name}${desc ? `<small class="item-desc">${desc}</small>` : ''}</span><span class="dots"></span><span class="price">${price}</span></li>`).join('')}</ul>
      <img class="card-doodle" src="assets/elements/${cat.doodle}" alt="" aria-hidden="true">
      <img class="card-doodle alt" src="assets/elements/birds.svg" alt="" aria-hidden="true">
    </div>
    <div class="menu-figure">
      <img class="card-drink" src="assets/drinks/${cat.image}" alt="${cat.title} drink" loading="lazy">
    </div>
  `;
  flow.appendChild(card);
});

const tabButtons = [...document.querySelectorAll('.ticket-tab')];
const cards = [...document.querySelectorAll('.menu-card')];
tabButtons[0]?.classList.add('active');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    target?.scrollIntoView({behavior:'smooth', block:'center'});
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.13, rootMargin:'0px 0px -35px 0px'});

document.querySelectorAll('.reveal, .ticket-tab').forEach(el => revealObserver.observe(el));

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.target === id));
    }
  });
},{threshold:.48});
cards.forEach(card => activeObserver.observe(card));

const props = [...document.querySelectorAll('[data-parallax]')];
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  props.forEach(el => {
    const speed = Number(el.dataset.parallax || 0);
    el.style.translate = `0 ${y * speed}px`;
  });
  backTop.classList.toggle('show', y > 680);
},{passive:true});
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// light magnetic hover for desktop without making it heavy
if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.ticket-tab, .stamp-button, .mini-ticket').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.04}px, ${(e.clientY-r.top-r.height/2)*0.04-3}px) rotate(-1deg)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });
}
