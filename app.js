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

function displayProducts(){
    const productsContainer = document.querySelector('.products')

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
    }).join(' ');
    productsContainer.innerHTML = productsHTML;
}
displayProducts();

function addToCart(productId){
    const selectedProduct = products(product => product.id === productId)

    const cartItem = cart.find(item => item.id === productId)
    if(cartItem){
        cartItem.quantity+=1
    }else{
      // If the product is not in the cart, add it with quantity 1
      cart.push({
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: 1,
      });
    }

    calculateTotalPrice()
    updateCartDisplay()
}

function calculateTotalPrice(){
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    console.log()
}