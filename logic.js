function switchTab(id, btn) {
    document.querySelectorAll('.tab-pane')
            .forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn')
            .forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
  }

  // Size selector
  document.querySelectorAll('.size-btn:not(.sold)').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn')
              .forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Color selector
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', function () {
      document.querySelectorAll('.color-dot')
              .forEach(d => d.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Thumbnail selector
  document.querySelectorAll('.thumb').forEach(t => {
    t.addEventListener('click', function () {
      document.querySelectorAll('.thumb')
              .forEach(x => x.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Wishlist toggle
  const wishBtn = document.querySelector('.btn-wish');
  wishBtn.addEventListener('click', function () {
    this.textContent = this.textContent === '🤍' ? '❤️' : '🤍';
  });

  // Add to cart feedback
  const cartBtn = document.querySelector('.btn-cart');
  cartBtn.addEventListener('click', function () {
    this.textContent = '✓ Added to Cart!';
    this.style.background = '#7C3AED';
    setTimeout(() => {
      this.textContent = '🛒 Add to Cart';
      this.style.background = '';
    }, 1800);
  });