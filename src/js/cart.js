document.addEventListener("DOMContentLoaded", () => {
  const cart = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    addItem(item) {
      this.items.push(item);
      this.save();
      this.render();
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.save();
      this.render();
    },
    save() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    total() {
      return this.items.reduce((sum, i) => sum + i.price, 0);
    },
    render() {
      const cartItems = document.getElementById('cartItems');
      const cartTotal = document.getElementById('cartTotal');
      const cartCount = document.getElementById('cartCount');

      cartItems.innerHTML = '';
      this.items.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button class="remove-btn">x</button>`;
        li.querySelector('.remove-btn').addEventListener('click', () => this.removeItem(idx));
        cartItems.appendChild(li);
      });

      cartTotal.textContent = this.total().toLocaleString();
      cartCount.textContent = this.items.length;
    }
  };


  const toggleBtn = document.getElementById('cartToggle');
  toggleBtn.addEventListener('click', () => {
    document.querySelector('.cart__dropdown').classList.toggle('active');
  });


  document.getElementById('checkoutCart').addEventListener('click', () => {
    if(cart.items.length === 0) return alert("Cart is empty!");
    let message = "Order:\n";
    cart.items.forEach(i => message += `• ${i.name} - $${i.price}\n`);
    message += `Total: $${cart.total()}`;
    alert(message);
    cart.items = [];
    cart.save();
    cart.render();
  });


  cart.render();


  window.globalCart = cart;
});
