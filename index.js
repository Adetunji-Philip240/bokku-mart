function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggler = document.getElementById("toggler");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    toggler.classList.remove("bi-list");
    toggler.classList.add("bi-x");
  } else {
    toggler.classList.remove("bi-x");
    toggler.classList.add("bi-list");
  }
}

//For Cart

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;
let itemCount = cart.length; // Initialize itemCount from stored cart

// Load initial cart state
cart.forEach(item => {
    total += item.price;
});

updateCart();
updateNotification();

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    itemCount++;
    updateCart();
    updateNotification();
    saveCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => removeFromCart(index); // Bind the remove function
        
        li.appendChild(deleteButton);
        cartItems.appendChild(li);
    });
    totalPrice.textContent = `Total: $${total}`;
}

function removeFromCart(index) {
    total -= cart[index].price; // Subtract price from total
    cart.splice(index, 1); // Remove item from cart
    itemCount--;
    updateCart();
    updateNotification();
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

function updateNotification() {
    const notification = document.getElementById('notification');
    const cartNotification = document.getElementById('cartNotification');
    notification.textContent = itemCount;
    cartNotification.textContent = itemCount; // Update both notifications
    notification.style.display = itemCount > 0 ? 'inline' : 'none'; // Show or hide notification
    cartNotification.style.display = itemCount > 0 ? 'inline' : 'none'; // Show or hide notification in cart
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}

function buyNow() {
    if (itemCount > 0) {
        alert(`Proceeding to checkout with total: $${total}`);
        // Here you can add your checkout logic
        // For example, redirect to a payment page or clear the cart
    } else {
        alert('Your cart is empty!');
    }
}