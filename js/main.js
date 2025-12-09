document.getElementById('yr') && (document.getElementById('yr').textContent = new Date().getFullYear());
document.getElementById('nav-toggle')?.addEventListener('click', function(){
  const nav = document.getElementById('site-nav');
  if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
});

// Simple cart for shop page - stored in localStorage
window._hollaCart = JSON.parse(localStorage.getItem('_hollaCart') || '[]');

function renderCartTotal(){
  const t = window._hollaCart.reduce((s,i)=>s+i.price,0);
  const el = document.getElementById('cart-total');
  if(el) el.textContent = '₦' + t.toLocaleString();
  const checkout = document.getElementById('checkout-link');
  if(checkout) checkout.href = `https://wa.me/2348055248113?text=${encodeURIComponent('Hello, I want to place an order. Cart total: ₦'+t)}`;
}

window.addToCart = function(name, price){
  window._hollaCart.push({name, price});
  localStorage.setItem('_hollaCart', JSON.stringify(window._hollaCart));
  renderCartTotal();
  alert(name + ' added to cart');
}

function submitOrderForm(ev){
  ev.preventDefault();
  const name = document.getElementById('o-name').value || '';
  const phone = document.getElementById('o-phone').value || '';
  const email = document.getElementById('o-email')?.value || '';
  const item = document.getElementById('o-item').value || '';
  const qty = document.getElementById('o-qty').value || '1';
  const location = document.getElementById('o-location')?.value || '';
  const text = `Hi Holla Print, I submitted an order.%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AItem: ${item}%0AQuantity: ${qty}%0ALocation: ${location}`;
  window.open('https://wa.me/2348055248113?text='+text,'_blank');
}

document.addEventListener('DOMContentLoaded', function(){ renderCartTotal(); });
