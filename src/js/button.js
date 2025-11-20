document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById('quickBuyModal');
  const form = document.getElementById('quickBuyForm');
  const success = document.getElementById('formSuccess');
  const closeBtn = document.getElementById('modalClose');
  const overlay = document.getElementById('modalOverlay');
  const submitBtn = form.querySelector('.quick-buy-btn');

  function openQuickBuy() {
    modal.classList.add('active');
    form.style.display = 'block';
    success.style.display = 'none';
    submitBtn.textContent = "Place an order";
    submitBtn.classList.remove("loading");
  }

  function closeQuickBuy() {
    modal.classList.remove('active');
  }

  document.querySelectorAll('.header__btn, .hero__btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openQuickBuy();
    });
  });

  closeBtn.addEventListener('click', closeQuickBuy);
  overlay.addEventListener('click', closeQuickBuy);

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.textContent = 'Place an order';
      form.style.display = 'none';
      success.style.display = 'block';
    }, 1500);
  });

});
