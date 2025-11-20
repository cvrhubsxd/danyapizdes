import { fetchBouquets } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector('.cards-grid');
  if (!grid) return;

  const bouquets = await fetchBouquets();

  bouquets.forEach(bouquet => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${bouquet.img}" alt="${bouquet.name}">
      <h3>${bouquet.name}</h3>
      <p>$${bouquet.price}</p>
      <a href="#" class="btn">Добавить в корзину</a>
    `;

    const btn = card.querySelector('.btn');
    btn.addEventListener('click', e => {
      e.preventDefault();
      const existing = window.globalCart.items.find(i => i.name === bouquet.name);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
        window.globalCart.save();
        window.globalCart.render();
      } else {
        window.globalCart.addItem({ ...bouquet, quantity: 1 });
      }
    });

    grid.appendChild(card);
  });
});
