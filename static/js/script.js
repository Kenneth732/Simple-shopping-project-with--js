// Sample product data
const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'product1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      image: 'product2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more products here...
  ];
  
  // Cart data
  const cart = [];
  
  // Function to display the products
  function displayProducts() {
    const productsContainer = document.querySelector('.products');
  
    // Loop through the products and generate HTML for each product
    const productsHTML = products
      .map((product) => {
        return `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;
      })
      .join('');
  
    // Set the HTML of the products container
    productsContainer.innerHTML = productsHTML;
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    // Find the selected product by its ID
    const selectedProduct = products.find((product) => product.id === productId);
  
    // Check if the product is already in the cart
    const cartItem = cart.find((item) => item.id === productId);
  
    if (cartItem) {
      // If the product is already in the cart, increment the quantity
      cartItem.quantity += 1;
     } else {
      // If the product is not in the cart, add it with quantity 1
        cart.push({
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: 1,
      });
    }
  
    // Recalculate the total price
    calculateTotalPrice();
  
    // Update the cart display
    updateCartDisplay();
  }
  
  // Function to calculate the total price of the cart
  function calculateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  
    console.log('Total Price:', totalPrice.toFixed(2));
  }
  
  // Function to update the cart display
  function updateCartDisplay() {
    // Get the cart element
    const cartElement = document.querySelector('.cart');
  
    // Generate the HTML for the cart items
    const cartHTML = cart
      .map((item) => {
        return `
          <div class="cart-item">
            <p>${item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        `;
      })
      .join('');
  
    // Set the HTML of the cart element
    cartElement.innerHTML = cartHTML;
  }
  
  // Call the displayProducts function to show the products
  displayProducts();
  



  // Function to calculate the total price of the cart
function calculateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  
    // Update the HTML element with the total price
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Function to update the cart display
  function updateCartDisplay() {
    // Get the cart element
    const cartElement = document.querySelector('.cart');
  
    // Generate the HTML for the cart items
    const cartHTML = cart
      .map((item) => {
        return `
          <div class="cart-item">
            <p>${item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        `;
      })
      .join('');
  
    // Set the HTML of the cart element
    cartElement.innerHTML = cartHTML;
  
    // Recalculate the total price
    calculateTotalPrice();
  }
  
  // Call the displayProducts function to show the products
  displayProducts();
  