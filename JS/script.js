// Cart functionality
let cartItems = [];

function addToCart(name, price) {
    let item = cartItems.find(item => item.name === name);
    if (item) {
        item.quantity++;
    } else {
        item = {
            name: name,
            price: price,
            quantity: 1
        };
        cartItems.push(item);
    }
    saveCartToLocalStorage();
    updateCartCount();
    alert(`${name} added to the cart!`);
}

function removeFromCart(name, price) {
    let item = cartItems.find(item => item.name === name);
    if (item && item.quantity > 0) {
        item.quantity--;
        if (item.quantity === 0) {
            cartItems = cartItems.filter(item => item.name !== name);
        }
        saveCartToLocalStorage();
        updateCartCount();
        alert(`${name} removed from the cart!`);
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}

function updateCartCount() {
    const countElements = document.querySelectorAll('.count');
    countElements.forEach(countElement => {
        const name = countElement.getAttribute('data-name');
        const item = cartItems.find(item => item.name === name);
        if (item) {
            countElement.textContent = item.quantity;
        } else {
            countElement.textContent = '0';
        }
    });
}

function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items to proceed to checkout.");
    } else {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Order placed successfully!\nTotal: $${total}`);
        cartItems = [];
        saveCartToLocalStorage();
        updateCartCount();
        displayCartItems();
    }
}

// Call loadCartFromLocalStorage to load cart items from localStorage on page load
loadCartFromLocalStorage();
