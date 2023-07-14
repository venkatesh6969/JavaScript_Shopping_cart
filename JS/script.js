// Function to get the cart items from localStorage
function getCartItems() {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  }
  
  // Function to save the cart items to localStorage
  function saveCartItems(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
  // Function to add an item to the cart
  function addToCart(item) {
    const cartItems = getCartItems();
    cartItems.push(item);
    saveCartItems(cartItems);
  }
  
  // Function to remove an item from the cart
  function removeFromCart(index) {
    const cartItems = getCartItems();
    cartItems.splice(index, 1);
    saveCartItems(cartItems);
  }
  
  // Function to render the cart items
  function renderCartItems() {
    const cartItems = getCartItems();
    
    
      const buttons = document.querySelectorAll('.btn-primary');
    
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const item = {
            name: button.parentElement.querySelector('.card-title').textContent,
            price: button.parentElement.querySelector('.card-text').textContent.replace('$', ''),
            image: button.parentElement.querySelector('.card-img-top').src
          };
          addToCart(item);
          button.textContent = 'Added to Cart';
        });
      });
    
      // ...
    
    
  
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
  
    if (cartItems.length === 0) {
      const emptyCartMessage = document.createElement('p');
      emptyCartMessage.textContent = 'Your cart is empty.';
      cartItemsElement.appendChild(emptyCartMessage);
    } else {
      cartItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
  
        const row = document.createElement('div');
        row.classList.add('row', 'g-0');
        card.appendChild(row);
  
        const colImg = document.createElement('div');
        colImg.classList.add('col-md-4');
        row.appendChild(colImg);
  
        const img = document.createElement('img');
        img.src = item.image;
        img.classList.add('img-fluid');
        img.alt = item.name;
        colImg.appendChild(img);
  
        const colBody = document.createElement('div');
        colBody.classList.add('col-md-8');
        row.appendChild(colBody);
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        colBody.appendChild(cardBody);
  
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.name;
        cardBody.appendChild(title);
  
        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = '$' + item.price;
        cardBody.appendChild(price);
  
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger');
        removeButton.textContent = 'Remove';
        cardBody.appendChild(removeButton);
  
        removeButton.addEventListener('click', () => {
          removeFromCart(index);
          renderCartItems();
        });
  
        cartItemsElement.appendChild(card);
      });
    }
  }
  
  // Function to initialize the cart
  function initCart() {
    renderCartItems();
  }
  
  // Call the initCart function when the page is loaded
  window.addEventListener('DOMContentLoaded', initCart);
  