document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.hero-mini-product-card');
  let currentIndex = 0;

  function showNextProduct() {
    const currentProduct = products[currentIndex];
    currentProduct.classList.remove('fadeIn');
    currentProduct.classList.add('fadeOut');

    setTimeout(() => {
      currentProduct.style.display = 'none';
      currentIndex = (currentIndex + 1) % products.length;
      const nextProduct = products[currentIndex];
      nextProduct.style.display = 'block';
      nextProduct.classList.remove('fadeOut');
      nextProduct.classList.add('fadeIn');
    }, 2000);
  }

  // Show the first product initially
  products[currentIndex].style.display = 'block';
  products[currentIndex].classList.add('fadeIn');

  // Start the loop
  setInterval(showNextProduct, 3000); // Adjust timing as needed
});
