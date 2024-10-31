let products = [];
let cart = [];
let currentLanguage = 'uk';
let savedNeonColor = localStorage.getItem('neonColor') || '#ff00de';

const translations = {
    uk: {
        title: "МАГІЧНІ СНИ",
        welcome: "Ласкаво просимо до світу чарівних сновидінь!",
        adminPanel: "Адмін панель",
        cart: "Кошик",
        addToCart: "Додати в кошик",
        checkout: "Оформити замовлення",
        emptyCart: "Ваш кошик порожній",
        total: "Всього",
        changeColor: "Змінити колір неону",
        home: "Головна",
        about: "Про нас",
        products: "Товари",
        contacts: "Контакти",
        addProduct: "Додати товар",
        deleteProduct: "Видалити товар",
        aboutDescription: "МАГІЧНІ СНИ - це унікальний магазин, де ви можете придбати все необхідне для чарівних та незабутніх сновидінь. Наша місія - зробити ваш сон яскравим, приємним та корисним.",
        contactPhone: "Телефон: +380123456789",
        contactEmail: "Email: info@magicni-sny.com",
        contactAddress: "Адреса: вул. Сонна, 42, м. Київ, Україна",
        footerText: "© 2024 МАГІЧНІ СНИ. Всі права захищені.",
        thankYouMessage: "Дякуємо за замовлення! Магія вже в дорозі до вас!",
        cartTitle: "Ваш магічний кошик",
        adminTitle: "Адмін панель",
        addProductTitle: "Додати новий товар",
        productListTitle: "Список товарів",
        currency: "грн",
        productName: "Назва товару",
        productPrice: "Ціна",
        productDescription: "Опис",
        productImage: "Зображення",
        submit: "Відправити"
    },
    en: {
        title: "MAGICAL DREAMS",
        welcome: "Welcome to the world of magical dreams!",
        adminPanel: "Admin Panel",
        cart: "Cart",
        addToCart: "Add to Cart",
        checkout: "Checkout",
        emptyCart: "Your cart is empty",
        total: "Total",
        changeColor: "Change neon color",
        home: "Home",
        about: "About",
        products: "Products",
        contacts: "Contacts",
        addProduct: "Add Product",
        deleteProduct: "Delete Product",
        aboutDescription: "MAGICAL DREAMS is a unique store where you can purchase everything you need for magical and unforgettable dreams. Our mission is to make your sleep bright, pleasant, and beneficial.",
        contactPhone: "Phone: +380123456789",
        contactEmail: "Email: info@magical-dreams.com",
        contactAddress: "Address: 42 Dreamy St., Kyiv, Ukraine",
        footerText: "© 2024 MAGICAL DREAMS. All rights reserved.",
        thankYouMessage: "Thank you for your order! Magic is on its way to you!",
        cartTitle: "Your Magical Cart",
        adminTitle: "Admin Panel",
        addProductTitle: "Add New Product",
        productListTitle: "Product List",
        currency: "UAH",
        productName: "Product Name",
        productPrice: "Price",
        productDescription: "Description",
        productImage: "Image",
        submit: "Submit"
    },
    de: {
        title: "MAGISCHE TRÄUME",
        welcome: "Willkommen in der Welt der magischen Träume!",
        adminPanel: "Admin-Panel",
        cart: "Warenkorb",
        addToCart: "In den Warenkorb",
        checkout: "Zur Kasse",
        emptyCart: "Ihr Warenkorb ist leer",
        total: "Gesamt",
        changeColor: "Neonfarbe ändern",
        home: "Startseite",
        about: "Über uns",
        products: "Produkte",
        contacts: "Kontakte",
        addProduct: "Produkt hinzufügen",
        deleteProduct: "Produkt löschen",
        aboutDescription: "MAGISCHE TRÄUME ist ein einzigartiger Laden, in dem Sie alles für magische und unvergessliche Träume finden. Unsere Mission ist es, Ihren Schlaf hell, angenehm und wohltuend zu gestalten.",
        contactPhone: "Telefon: +380123456789",
        contactEmail: "E-Mail: info@magische-traeume.com",
        contactAddress: "Adresse: Traumstraße 42, Kiew, Ukraine",
        footerText: "© 2024 MAGISCHE TRÄUME. Alle Rechte vorbehalten.",
        thankYouMessage: "Vielen Dank für Ihre Bestellung! Die Magie ist auf dem Weg zu Ihnen!",
        cartTitle: "Ihr magischer Warenkorb",
        adminTitle: "Admin-Panel",
        addProductTitle: "Neues Produkt hinzufügen",
        productListTitle: "Produktliste",
        currency: "UAH",
        productName: "Produktname",
        productPrice: "Preis",
        productDescription: "Beschreibung",
        productImage: "Bild",
        submit: "Absenden"
    },
    fr: {
        title: "RÊVES MAGIQUES",
        welcome: "Bienvenue dans le monde des rêves magiques !",
        adminPanel: "Panneau d'administration",
        cart: "Panier",
        addToCart: "Ajouter au panier",
        checkout: "Passer à la caisse",
        emptyCart: "Votre panier est vide",
        total: "Total",
        changeColor: "Changer la couleur néon",
        home: "Accueil",
        about: "À propos",
        products: "Produits",
        contacts: "Contacts",
        addProduct: "Ajouter un produit",
        deleteProduct: "Supprimer le produit",
        aboutDescription: "RÊVES MAGIQUES est une boutique unique où vous pouvez acheter tout ce dont vous avez besoin pour des rêves magiques et inoubliables. Notre mission est de rendre votre sommeil lumineux, agréable et bénéfique.",
        contactPhone: "Téléphone : +380123456789",
        contactEmail: "Email : info@reves-magiques.com",
        contactAddress: "Adresse : 42 rue des Rêves, Kiev, Ukraine",
        footerText: "© 2024 RÊVES MAGIQUES. Tous droits réservés.",
        thankYouMessage: "Merci pour votre commande ! La magie est en route vers vous !",
        cartTitle: "Votre panier magique",
        adminTitle: "Panneau d'administration",
        addProductTitle: "Ajouter un nouveau produit",
        productListTitle: "Liste des produits",
        currency: "UAH",
        productName: "Nom du produit",
        productPrice: "Prix",
        productDescription: "Description",
        productImage: "Image",
        submit: "Soumettre"
    },
    es: {
        title: "SUEÑOS MÁGICOS",
        welcome: "¡Bienvenido al mundo de los sueños mágicos!",
        adminPanel: "Panel de administración",
        cart: "Carrito",
        addToCart: "Añadir al carrito",
        checkout: "Finalizar compra",
        emptyCart: "Tu carrito está vacío",
        total: "Total",
        changeColor: "Cambiar color neón",
        home: "Inicio",
        about: "Acerca de",
        products: "Productos",
        contacts: "Contactos",
        addProduct: "Añadir producto",
        deleteProduct: "Eliminar producto",
        aboutDescription: "SUEÑOS MÁGICOS es una tienda única donde puedes comprar todo lo necesario para sueños mágicos e inolvidables. Nuestra misión es hacer tu sueño brillante, agradable y beneficioso.",
        contactPhone: "Teléfono: +380123456789",
        contactEmail: "Email: info@suenos-magicos.com",
        contactAddress: "Dirección: Calle de los Sueños 42, Kiev, Ucrania",
        footerText: "© 2024 SUEÑOS MÁGICOS. Todos los derechos reservados.",
        thankYouMessage: "¡Gracias por tu pedido! ¡La magia está en camino hacia ti!",
        cartTitle: "Tu carrito mágico",
        adminTitle: "Panel de administración",
        addProductTitle: "Añadir nuevo producto",
        productListTitle: "Lista de productos",
        currency: "UAH",
        productName: "Nombre del producto",
        productPrice: "Precio",
        productDescription: "Descripción",
        productImage: "Imagen",
        submit: "Enviar"
    }
};

async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        products = data.map((product, index) => ({
            id: index + 1,
            name: product.name,
            description: product.description,
            price: product.price,
            image: `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.name.uk)}`
        }));
        renderProducts();
        renderAdminProductList();
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function renderProducts() {
    const productsContainer = document.getElementById('productGrid');
    productsContainer.innerHTML = products.map(product => `
        <div class="product" style="box-shadow: 0 0 10px ${savedNeonColor}, 0 0 20px ${savedNeonColor}, 0 0 30px ${savedNeonColor}">
            <img src="${product.image}" alt="${product.name[currentLanguage]}">
            <h3>${product.name[currentLanguage]}</h3>
            <p>${product.description[currentLanguage]}</p>
            <p class="price">${product.price} ${translations[currentLanguage].currency}</p>
            <button class="button" onclick="addToCart(${product.id})">
                <i data-lucide="shopping-cart"></i> ${translations[currentLanguage].addToCart}
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<p>${translations[currentLanguage].emptyCart}</p>`;
        cartTotal.innerHTML = '';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <p>${item.name[currentLanguage]} - ${item.price} ${translations[currentLanguage].currency}</p>
                <button class="button" onclick="removeFromCart(${item.id})">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.innerHTML = `<p class="total">${translations[currentLanguage].total}: ${total} ${translations[currentLanguage].currency}</p>`;
    }
    lucide.createIcons();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

function checkout() {
    alert(translations[currentLanguage].thankYouMessage);
    cart = [];
    updateCartCount();
    renderCart();
    closeCart();
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function changeBorderColor() {
    savedNeonColor = getRandomColor();
    updateNeonColor();
}

function saveNeonColor() {
    localStorage.setItem('neonColor', savedNeonColor);
}

function restoreNeonColor() {
    savedNeonColor = localStorage.getItem('neonColor') || '#ff00de';
    updateNeonColor();
}

function updateNeonColor() {
    document.documentElement.style.setProperty('--neon-color', savedNeonColor);
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.boxShadow = `0 0 10px ${savedNeonColor}, 0 0 20px ${savedNeonColor}, 0 0 30px ${savedNeonColor}`;
    });
}

function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    updateTranslations();
}

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });

    document.title = translations[currentLanguage].title;
    
    renderProducts();
    renderCart();
    renderAdminProductList();
    lucide.createIcons();
}

function addProduct(event) {
    event.preventDefault();
    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: {},
        description: {},
        price: parseFloat(document.getElementById('productPrice').value),
        image: document.getElementById('productImage').files[0] ? URL.createObjectURL(document.getElementById('productImage').files[0]) : '/placeholder.svg'
    };

    Object.keys(translations).forEach(lang => {
        newProduct.name[lang] = document.getElementById(`productName_${lang}`).value;
        newProduct.description[lang] = document.getElementById(`productDescription_${lang}`).value;
    });

    products.push(newProduct);
    saveProducts();
    renderProducts();
    renderAdminProductList();
    event.target.reset();
}

function renderAdminProductList() {
    const productList = 
 document.getElementById('productList');
    productList.innerHTML = `
        <h3>${translations[currentLanguage].productListTitle}</h3>
        ${products.map(product => `
            <div class="product-list-item">
                <span>${product.name[currentLanguage]}</span>
                <button class="button" onclick="deleteProduct(${product.id})">
                    ${translations[currentLanguage].deleteProduct}
                </button>
            </div>
        `).join('')}
    `;
}

function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
    saveProducts();
    renderProducts();
    renderAdminProductList();
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Event listeners
document.getElementById('cartButton').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'block';
    renderCart();
});

document.getElementById('adminButton').addEventListener('click', () => {
    document.getElementById('adminModal').style.display = 'block';
});

document.getElementById('checkoutButton').addEventListener('click', checkout);

document.getElementById('changeBorderColorBtn').addEventListener('click', changeBorderColor);

document.getElementById('languageSelect').addEventListener('change', changeLanguage);

document.getElementById('addProductForm').addEventListener('submit', addProduct);

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    restoreNeonColor();
    updateTranslations();
});

// For demonstration purposes, let's log the products
console.log('Products:', products);