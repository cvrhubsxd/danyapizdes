import { fetchFlowers, fetchBouquets } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
  const flowers = await fetchFlowers();

  const flowersGrid = document.getElementById('flowersGrid');
  const dropZone = document.getElementById('dropZone');
  const bouquetDiv = document.getElementById('bouquet');
  const checkoutBtn = document.getElementById('checkoutBtn');

  let bouquet = [];
  let draggedFlower = null;

  flowers.forEach(f => {
    const card = document.createElement('div');
    card.className = 'flower-card';
    card.draggable = true;
    card.dataset.name = f.name;
    card.dataset.price = f.price;

    card.innerHTML = `
      <img src="${f.img}" alt="${f.name}">
      <div class="flower-info">
        <div class="flower-name">${f.name}</div>
        <div class="flower-price">$${f.price}</div>
      </div>
    `;


    card.addEventListener('dragstart', e => {
      e.dataTransfer.setData('name', f.name);
      e.dataTransfer.setData('price', f.price);
      e.dataTransfer.setData('img', f.img);
    });

 
    card.addEventListener('touchstart', e => {
      draggedFlower = card.cloneNode(true);
      draggedFlower.style.position = 'absolute';
      draggedFlower.style.pointerEvents = 'none';
      draggedFlower.style.opacity = '0.7';
      draggedFlower.dataset.name = f.name;
      draggedFlower.dataset.price = f.price;
      draggedFlower.dataset.img = f.img;
      document.body.appendChild(draggedFlower);
    });

    card.addEventListener('touchmove', e => {
      if (!draggedFlower) return;
      const touch = e.touches[0];
      draggedFlower.style.left = touch.pageX - draggedFlower.offsetWidth / 2 + 'px';
      draggedFlower.style.top = touch.pageY - draggedFlower.offsetHeight / 2 + 'px';
      e.preventDefault();
    });

    card.addEventListener('touchend', e => {
      if (!draggedFlower) return;
      const touch = e.changedTouches[0];
      const dropRect = dropZone.getBoundingClientRect();
      if (
        touch.clientX >= dropRect.left &&
        touch.clientX <= dropRect.right &&
        touch.clientY >= dropRect.top &&
        touch.clientY <= dropRect.bottom
      ) {
        addFlowerToBouquet(draggedFlower.dataset.name, +draggedFlower.dataset.price, draggedFlower.dataset.img, touch.clientX, touch.clientY);
      }
      draggedFlower.remove();
      draggedFlower = null;
    });

    flowersGrid.appendChild(card);
  });

 
  dropZone.addEventListener('dragover', e => e.preventDefault());
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    const name = e.dataTransfer.getData('name');
    const price = +e.dataTransfer.getData('price');
    const img = e.dataTransfer.getData('img');

    addFlowerToBouquet(name, price, img, e.clientX, e.clientY);
  });


  function addFlowerToBouquet(name, price, img, x, y) {
    const flowerElem = document.createElement('div');
    flowerElem.className = 'dropped-flower';
    flowerElem.innerHTML = `<img src="${img}" alt="${name}">`;
    flowerElem.dataset.id = Date.now();

    const dropRect = dropZone.getBoundingClientRect();
    flowerElem.style.left = (x - dropRect.left) + 'px';
    flowerElem.style.top = (y - dropRect.top - 100) + 'px';

    flowerElem.onclick = () => {
      bouquet = bouquet.filter(f => f.id !== flowerElem.dataset.id);
      flowerElem.remove();
      updateTotals();
    };

    bouquetDiv.appendChild(flowerElem);
    bouquet.push({ name, price, id: flowerElem.dataset.id });

    updateTotals();
  }

 
  checkoutBtn.addEventListener('click', () => {
    if (bouquet.length === 0) return alert("Add at least one flower!");

    const counts = {};
    bouquet.forEach(f => counts[f.name] = (counts[f.name] || 0) + 1);

    for (let name in counts) {
      const price = bouquet.find(f => f.name === name).price;
      window.globalCart.addItem({ name, price, quantity: counts[name] });
    }

    alert("Bouquet added to cart!");
    bouquet = [];
    bouquetDiv.innerHTML = '';
    updateTotals();
  });

 
  function updateTotals() {
    const total = bouquet.reduce((s, f) => s + f.price, 0);
    document.getElementById('totalCount').textContent = bouquet.length;
    document.getElementById('totalPrice').textContent = total.toLocaleString();
  }
});
