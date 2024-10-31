let products = [];
let cart = [];

// Завантаження продуктів
function loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                saveProducts();
            });
    }
    renderProducts();
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price} грн</p>
            <button class="button" onclick="addToCart(${product.id})">
                <i data-lucide="shopping-cart"></i> Додати в кошик
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Ваш кошик порожній</p>';
        cartTotal.innerHTML = '';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <p>${item.name}</p>
                    <p>${item.quantity} x ${item.price} грн</p>
                </div>
                <button class="button" onclick="removeFromCart(${item.id})">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.innerHTML = `<p class="total">Всього: ${total} грн</p>`;
    }
    lucide.createIcons();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

function checkout() {
    alert('Дякуємо за замовлення! Магія вже в дорозі до вас!');
    cart = [];
    updateCartCount();
    renderCart();
    closeCart();
}

// Адмін функції
function renderAdminProducts() {
    const deleteProducts = document.getElementById('deleteProducts');
    deleteProducts.innerHTML = products.map(product => `
        <div class="delete-item">
            <p>${product.name}</p>
            <button class="button" onclick="deleteProduct(${product.id})">
                <i data-lucide="trash-2"></i> Видалити
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    const newProduct = { id: newId, name, description, price, image };
    products.push(newProduct);
    saveProducts();
    renderProducts();
    renderAdminProducts();
    event.target.reset();
}

function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
    saveProducts();
    renderProducts();
    renderAdminProducts();
}

// Відкриття/закриття модальних вікон
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const adminButton = document.getElementById('adminButton');
const adminModal = document.getElementById('adminModal');
const checkoutButton = document.getElementById('checkoutButton');

cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
    renderCart();
});

adminButton.addEventListener('click', () => {
    adminModal.style.display = 'block';
});

function closeCart() {
    cartModal.style.display = 'none';
}

function closeAdmin() {
    adminModal.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        closeCart();
    }
    if (event.target === adminModal) {
        closeAdmin();
    }
});

checkoutButton.addEventListener('click', checkout);

// Адмін логін
const loginButton = document.getElementById('loginButton');
const adminPassword = document.getElementById('adminPassword');
const adminPanel = document.getElementById('adminPanel');
const adminLogin = document.getElementById('adminLogin');

loginButton.addEventListener('click', () => {
    if (adminPassword.value === '319560') {
        adminPanel.style.display = 'block';
        adminLogin.style.display = 'none';
        renderAdminProducts();
    } else {
        alert('Невірний пароль');
    }
});

// Додавання нового товару
const addProductForm = document.getElementById('addProductForm');
addProductForm.addEventListener('submit', addProduct);

// Ініціалізація
loadProducts();
lucide.createIcons();