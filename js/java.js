
// BAKERY PRODUCT DATA


const MENU = [
    // FEATURED PRODUCTS
    {
        name: "Golden croissant with strawberries",
        price: 28,
        category: "Featured",
        image: "images/artisan-bread-and-pastries-product-1.jpg"
    },
    {
        name: "Classic chocolate cake",
        price: 150,
        category: "Featured",
        image: "images/chocolate-cake-product-2.jpg"
    },
    {
        name: "Chocolate topped celebration cake",
        price: 400,
        category: "Featured",
        image: "images/celebration-cake-product-3.jpg"
    },

    // BREAD
    {
        name: "Sesame seed loaf",
        price: 38,
        category: "Bread",
        image: "images/bread-with-black-seeds.jpg"
    },
    {
        name: "Farm white loaf",
        price: 32,
        category: "Bread",
        image: "images/bread.jpg"
    },
    {
        name: "Gingerbread",
        price: 35,
        category: "Bread",
        image: "images/ginger-bread.jpg"
    },
    {
        name: "Chocolate chip bread",
        price: 36,
        category: "Bread",
        image: "images/chocolate-chip-bread.jpg"
    },
    {
        name: "Banana nut bread",
        price: 45,
        category: "Bread",
        image: "images/banana-bread.jpg"
    },
    {
        name: "Bagels (pack of 4)",
        price: 42,
        category: "Bread",
        image: "images/bagul.jpg"
    },

    // PASTRIES
    {
        name: "Ferrero Rocher cupcake",
        price: 50,
        category: "Pastries",
        image: "images/ferrero-cupcake-pastries.jpg"
    },
    {
        name: "Chocolate cupcake",
        price: 25,
        category: "Pastries",
        image: "images/chocolate-cupcake.jpg"
    },
    {
        name: "Cinnamon bun",
        price: 30,
        category: "Pastries",
        image: "images/ciniomon-bun-for-pastries.jpg"
    },
    {
        name: "Chocolate peanut croissants",
        price: 32,
        category: "Pastries",
        image: "images/croissant-topped-with-chocolate.jpg"
    },
    {
        name: "Chocolate drizzle croissants",
        price: 30,
        category: "Pastries",
        image: "images/croissant-topped.jpg"
    },
    {
        name: "Berry milk tart",
        price: 35,
        category: "Pastries",
        image: "images/milk-tart-with-red-black berries.jpg"
    },

    // CAKES
    {
        name: "Floral celebration cake",
        price: 380,
        category: "Cakes",
        image: "images/flower-cake.jpg"
    },
    {
        name: "Strawberry cream cake",
        price: 350,
        category: "Cakes",
        image: "images/strawberry-cake.jpg"
    },
    {
        name: "Chocolate topped cake",
        price: 400,
        category: "Cakes",
        image: "images/celebration-cake-product-3.jpg"
    },
    {
        name: "Oreo cake",
        price: 360,
        category: "Cakes",
        image: "images/oreo-cake.jpg"
    },
    {
        name: "Fresh fruit cake",
        price: 390,
        category: "Cakes",
        image: "images/vegan-cake.jpg"
    },
    {
        name: "Vanilla blossom cake",
        price: 340,
        category: "Cakes",
        image: "images/vanilla-cake.jpg"
    }
];

//product ingredients
const PRODUCT_INGREDIENTS = {
    "Golden croissant with strawberries": [
        "Wheat flour",
        "Butter",
        "Fresh strawberries",
        "Milk",
        "Sugar",
        "Yeast",
        "Salt"
    ],
    "Classic chocolate cake": [
        "Wheat flour",
        "Cocoa powder",
        "Sugar",
        "Eggs",
        "Butter",
        "Milk",
        "Vanilla essence",
        "Baking powder"
    ],
    "Chocolate topped celebration cake": [
        "Wheat flour",
        "Cocoa powder",
        "Dark chocolate",
        "Eggs",
        "Butter",
        "Sugar",
        "Fresh cream",
        "Vanilla essence"
    ],
    "Sesame seed loaf": [
        "Wheat flour",
        "Sesame seeds",
        "Yeast",
        "Water",
        "Sugar",
        "Salt",
        "Vegetable oil"
    ],
    "Farm white loaf": [
        "Wheat flour",
        "Water",
        "Yeast",
        "Sugar",
        "Salt",
        "Butter"
    ],
    "Gingerbread": [
        "Wheat flour",
        "Ground ginger",
        "Cinnamon",
        "Brown sugar",
        "Butter",
        "Eggs",
        "Golden syrup",
        "Baking soda"
    ],
    "Chocolate chip bread": [
        "Wheat flour",
        "Chocolate chips",
        "Milk",
        "Sugar",
        "Yeast",
        "Butter",
        "Eggs",
        "Salt"
    ],
    "Banana nut bread": [
        "Wheat flour",
        "Ripe bananas",
        "Chopped walnuts",
        "Eggs",
        "Brown sugar",
        "Butter",
        "Baking powder",
        "Cinnamon"
    ],
    "Bagels (pack of 4)": [
        "Wheat flour",
        "Yeast",
        "Water",
        "Sugar",
        "Salt",
        "Vegetable oil"
    ],
    "Ferrero Rocher cupcake": [
        "Wheat flour",
        "Cocoa powder",
        "Hazelnuts",
        "Chocolate",
        "Eggs",
        "Butter",
        "Sugar",
        "Milk"
    ],
    "Chocolate cupcake": [
        "Wheat flour",
        "Cocoa powder",
        "Eggs",
        "Butter",
        "Sugar",
        "Milk",
        "Vanilla essence",
        "Baking powder"
    ],
    "Cinnamon bun": [
        "Wheat flour",
        "Cinnamon",
        "Brown sugar",
        "Butter",
        "Milk",
        "Yeast",
        "Eggs",
        "Vanilla icing"
    ],
    "Chocolate peanut croissants": [
        "Wheat flour",
        "Butter",
        "Chocolate",
        "Peanuts",
        "Milk",
        "Sugar",
        "Yeast",
        "Salt"
    ],
    "Chocolate drizzle croissants": [
        "Wheat flour",
        "Butter",
        "Milk",
        "Dark chocolate",
        "Sugar",
        "Yeast",
        "Salt"
    ],
    "Berry milk tart": [
        "Wheat flour",
        "Milk",
        "Eggs",
        "Sugar",
        "Butter",
        "Mixed berries",
        "Vanilla essence",
        "Cinnamon"
    ],
    "Floral celebration cake": [
        "Wheat flour",
        "Eggs",
        "Butter",
        "Sugar",
        "Vanilla essence",
        "Fresh cream",
        "Edible flower decorations",
        "Baking powder"
    ],
    "Strawberry cream cake": [
        "Wheat flour",
        "Fresh strawberries",
        "Fresh cream",
        "Eggs",
        "Butter",
        "Sugar",
        "Vanilla essence"
    ],
    "Chocolate topped cake": [
        "Wheat flour",
        "Cocoa powder",
        "Dark chocolate",
        "Eggs",
        "Butter",
        "Sugar",
        "Fresh cream",
        "Vanilla essence"
    ],
    "Oreo cake": [
        "Wheat flour",
        "Chocolate sandwich biscuits",
        "Cocoa powder",
        "Eggs",
        "Butter",
        "Sugar",
        "Fresh cream",
        "Milk"
    ],
    "Fresh fruit cake": [
        "Wheat flour",
        "Fresh seasonal fruit",
        "Plant-based milk",
        "Vegetable oil",
        "Sugar",
        "Vanilla essence",
        "Baking powder"
    ],
    "Vanilla blossom cake": [
        "Wheat flour",
        "Eggs",
        "Butter",
        "Sugar",
        "Vanilla essence",
        "Fresh cream",
        "Edible flower decorations",
        "Baking powder"
    ]
};

// MENU SETTINGS


let activeCategory = "All";



// DISPLAY PRODUCTS


function displayProducts() {

    const productList = document.getElementById("menu-list");
    const searchInput = document.getElementById("menu-search");
    const sortSelect = document.getElementById("menu-sort");
    const productCount = document.getElementById("menu-count");

    if (!productList || !searchInput || !sortSelect) {
        return;
    }

    const searchText = searchInput.value.toLowerCase();

    let filteredProducts = MENU.filter(product => {

        const matchesCategory =
        searchText.trim() !== "" ||
        activeCategory === "All" ||
        product.category === activeCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    // Sort products by price
    if (sortSelect.value === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortSelect.value === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Clear previous products
    productList.innerHTML = "";

    // Display product count
    if (productCount) {
        productCount.textContent =
            filteredProducts.length + " products found";
    }

    

    // Display products
    if (filteredProducts.length === 0) {

        const message = document.createElement("p");
        message.className = "no-products-message";

        if (searchText.trim() !== "") {
            message.textContent =
                'Sorry, "' + searchInput.value.trim() +
                '" was not found. Please try another search.';
        } else {
            message.textContent =
                "No products found in this category.";
        }

        productList.appendChild(message);

    } else {

        filteredProducts.forEach(product => {

            const productIndex = MENU.indexOf(product);

            const card = document.createElement("article");
            card.className = "product-card";

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;

            const heading = document.createElement("h3");
            heading.textContent = product.name;

            const price = document.createElement("p");
            price.textContent = "Price: R" + product.price;

            const button = document.createElement("button");
            button.type = "button";
            button.textContent = "Add to Cart";
            button.className = "add-to-cart";
            button.dataset.index = productIndex;

            card.append(image, heading, price, button);
            productList.appendChild(card);
        });
    }
}



// CATEGORY FILTERING


function setupCategories() {

    const categoryLinks =
        document.querySelectorAll(".menu-sidebar a[data-category]");

    categoryLinks.forEach(link => {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            activeCategory = this.dataset.category;

            displayProducts();

        });

    });
}



// SEARCH AND SORT

function setupSearchAndSort() {

    const searchInput = document.getElementById("menu-search");
    const sortSelect = document.getElementById("menu-sort");

    if (searchInput) {
        searchInput.addEventListener("input", displayProducts);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", displayProducts);
    }
}



// SHOPPING CART STORAGE


let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("sweetCakesCart")) || [];
} catch (error) {
    cart = [];
}



// ADD PRODUCTS TO CART


function addToCart(productIndex) {

    const product = MENU[productIndex];

    if (!product) return;

    const existingItem = cart.find(
        item => item.index === productIndex
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            index: productIndex,
            quantity: 1
        });
    }

    saveCart();
    displayCart();
}



// SAVE CART


function saveCart() {

    localStorage.setItem(
        "sweetCakesCart",
        JSON.stringify(cart)
    );
}



// DISPLAY SHOPPING CART


function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartDiscount = document.getElementById("cart-discount");
    const cartTotal = document.getElementById("cart-total");
    const discountMessage = document.getElementById("discount-message");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let totalQuantity = 0;
    let subtotal = 0;

    cart.forEach(item => {

        const product = MENU[item.index];

        if (!product || item.quantity < 1) return;

        totalQuantity += item.quantity;
        subtotal += product.price * item.quantity;

        const itemRow = document.createElement("div");
        itemRow.className = "cart-item";

        const itemName = document.createElement("p");
        itemName.textContent =
            product.name + " - R" + product.price;

        const quantity = document.createElement("span");
        quantity.textContent = " Quantity: " + item.quantity;

        const decreaseButton = document.createElement("button");
        decreaseButton.type = "button";
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", () => {
            changeQuantity(item.index, -1);
        });

        const increaseButton = document.createElement("button");
        increaseButton.type = "button";
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", () => {
            changeQuantity(item.index, 1);
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeFromCart(item.index);
        });

        itemRow.append(
            itemName,
            decreaseButton,
            quantity,
            increaseButton,
            removeButton
        );

        cartItems.appendChild(itemRow);
    });

    if (cart.length === 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    // Calculate discount
    let discount = 0;

    if (totalQuantity >= 10) {
        discount = subtotal * 0.10;
    }

    const total = subtotal - discount;

    // Update cart information
    if (cartCount) cartCount.textContent = totalQuantity;
    // Update floating cart counter
    const floatingCartCount = document.getElementById("floating-cart-count");

    if (floatingCartCount) {
    floatingCartCount.textContent = totalQuantity;
    }

    if (cartSubtotal) {
        cartSubtotal.textContent = subtotal.toFixed(2);
    }

    if (cartDiscount) {
        cartDiscount.textContent = discount.toFixed(2);
    }

    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }

    if (discountMessage) {

        discountMessage.textContent =
            totalQuantity >= 10
                ? "Congratulations! You received a 10% discount."
                : "Add " + (10 - totalQuantity) +
                  " more item(s) to qualify for the proposed discount.";
    }

    saveCart();
}



// change product quantity 


function changeQuantity(productIndex, amount) {

    const item = cart.find(
        item => item.index === productIndex
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(
            item => item.index !== productIndex
        );
    }

    displayCart();
}



// remove product from cart

function removeFromCart(productIndex) {

    cart = cart.filter(
        item => item.index !== productIndex
    );

    displayCart();
}



// clear shopping cart


function clearCart() {

    cart = [];
    saveCart();
    displayCart();
}
// Scroll animations
function setupScrollAnimations() {
    const elements = document.querySelectorAll(
    ".box-1, .box-2, .box-3, .featured-products, " +
    ".container-1, .container-2, .container, " +
    ".contact-heading, .contact-card, .map, " +
    ".menu-start, .menu-sidebar, .product-card"
    );
    elements.forEach(element => {
        element.classList.add("scroll-hidden");
    });
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Floating cart visibility
function setupFloatingCart() {
    const floatingCart = document.getElementById("floating-cart");
    const shoppingCart = document.getElementById("shopping-cart");
    if (!floatingCart || !shoppingCart) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingCart.style.display = "none";
            } else {
                floatingCart.style.display = "flex";
            }
        });
    }, {
        threshold: 0.1
    });
    observer.observe(shoppingCart);
}



// the copy order
async function copyOrder() {

    if (cart.length === 0) {
        alert("Your shopping cart is empty.");
        return;
    }

    let subtotal = 0;
    let totalQuantity = 0;

    let orderText = "SWEET CAKES BAKERY ORDER\n\n";

    cart.forEach(item => {

        const product = MENU[item.index];

        if (!product) return;

        const itemTotal = product.price * item.quantity;

        subtotal += itemTotal;
        totalQuantity += item.quantity;

        orderText +=
            product.name +
            " x " + item.quantity +
            " = R" + itemTotal.toFixed(2) + "\n";
    });

    const discount =
        totalQuantity >= 10 ? subtotal * 0.10 : 0;

    const total = subtotal - discount;

    orderText += "\nSubtotal: R" + subtotal.toFixed(2);
    orderText += "\nDiscount: R" + discount.toFixed(2);
    orderText += "\nTotal: R" + total.toFixed(2);

    try {
        await navigator.clipboard.writeText(orderText);
        alert("Your order has been copied!");
    } catch (error) {
        alert("Unable to copy the order. Please try again.");
    }
}

// Send shopping cart order to the enquiry page
function sendOrderToEnquiry() {

    if (cart.length === 0) {
        alert("Your shopping cart is empty. Please add products first.");
        return;
    }

    let orderDetails = "MY SWEET CAKES BAKERY ORDER\n\n";

    let subtotal = 0;
    let totalQuantity = 0;

    cart.forEach(item => {

        const product = MENU[item.index];

        const itemTotal = product.price * item.quantity;

        subtotal += itemTotal;
        totalQuantity += item.quantity;

        orderDetails +=
            product.name +
            " x " + item.quantity +
            " = R" + itemTotal.toFixed(2) + "\n";
    });

    const discount = totalQuantity >= 10 ? subtotal * 0.10 : 0;
    const total = subtotal - discount;

    orderDetails += "\nSubtotal: R" + subtotal.toFixed(2);
    orderDetails += "\nDiscount: R" + discount.toFixed(2);
    orderDetails += "\nTotal: R" + total.toFixed(2);

    localStorage.setItem("sweetCakesEnquiryOrder", orderDetails);

    window.location.href = "enquiries.html";
}



// Connect buttons
function setupShoppingCart() {

    const productList = document.getElementById("menu-list");
    const clearButton = document.getElementById("clear-cart");
    const copyButton = document.getElementById("copy-cart");

    // Add to cart buttons
    if (productList) {

        productList.addEventListener("click", function(event) {

            const button = event.target.closest(".add-to-cart");
            if (!button) return;
            const productIndex = Number(button.dataset.index);
            addToCart(productIndex);

        });
    }

// Clear cart button
 if (clearButton) {
    clearButton.addEventListener("click", clearCart);
}
// copy order button
if (copyButton) {
    copyButton.addEventListener("click", copyOrder);
}

// Send order to enquiry page
const sendOrderButton = document.getElementById("send-order");
if (sendOrderButton) {
    sendOrderButton.addEventListener("click", sendOrderToEnquiry);
}

displayCart();
}

//prodcut details for lightbox
function setupProductLightbox() {
    const productList = document.getElementById("menu-list");
    const lightbox = document.getElementById("product-lightbox");
    const closeButton = document.getElementById("close-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxName = document.getElementById("lightbox-name");
    const lightboxPrice = document.getElementById("lightbox-price");
    const lightboxIngredients = document.getElementById("lightbox-ingredients");
    const lightboxAllergens = document.getElementById("lightbox-allergens");
    if (!productList || !lightbox || !closeButton) return;

    // Open lightbox when a product image is clicked
    productList.addEventListener("click", function(event) {
        const image = event.target.closest(".product-card img");
        if (!image) return;
        const card = image.closest(".product-card");
        const button = card.querySelector(".add-to-cart");
        if (!button) return;
        const productIndex = Number(button.dataset.index);
        const product = MENU[productIndex];
        if (!product) return;
        lightboxImage.src = product.image;
        lightboxImage.alt = product.name;
        lightboxName.textContent = product.name;
        lightboxPrice.textContent = "Price: R" + product.price;

        // Display product ingredients
        lightboxIngredients.innerHTML = "";
        const ingredients = PRODUCT_INGREDIENTS[product.name] || [];
        ingredients.forEach(function(ingredient) {
            const item = document.createElement("li");
            item.textContent = ingredient;
            lightboxIngredients.appendChild(item);
        });
        
        // Display allergen information
    lightboxAllergens.innerHTML = "";
    const detectedAllergens = findAllergens(ingredients);
    if (detectedAllergens.length > 0) {
        detectedAllergens.forEach(function(allergen) {
            const item = document.createElement("li");
            item.textContent = allergen;
            lightboxAllergens.appendChild(item);
        });
    } else {
        lightboxAllergens.innerHTML = "<li>No common allergens identified in the listed ingredients.</li>";
    }
        lightbox.style.display = "flex";
    });

    // Close using the X button
    closeButton.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    // Close when clicking outside the content
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Close using the Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
}

// START THE WEBSITE FEATURES


document.addEventListener("DOMContentLoaded", function() {

    // Menu page
    if (document.getElementById("menu-list")) {

        displayProducts();
        setupCategories();
        setupSearchAndSort();
        setupShoppingCart();
        setupProductLightbox();
        setupMap();
        setupAccordion();
        setupEnquiryValidation();
        setupContactForm();
    }
    // the enquiry page
const enquiryMessage = document.getElementById("message");
if (enquiryMessage) {
    const savedOrder = localStorage.getItem("sweetCakesEnquiryOrder");
    if (savedOrder) {
        enquiryMessage.value = savedOrder;
        enquiryMessage.style.height = "auto";
        enquiryMessage.style.height = enquiryMessage.scrollHeight + "px";
        localStorage.removeItem("sweetCakesEnquiryOrder");
    }
    enquiryMessage.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});
}

// Bakery order preparation dates
const collectionDate = document.getElementById("date");
if (collectionDate) {
    const today = new Date();
    // Add 2 days for preparation
    today.setDate(today.getDate() + 2);
    // Format date as YYYY-MM-DD
    const minimumDate = today.toISOString().split("T")[0];
    // Prevent customers from selecting earlier dates
    collectionDate.min = minimumDate;
}
const dateMessage = document.getElementById("date-message");
if (collectionDate && dateMessage) {
    collectionDate.addEventListener("change", function() {
        const selectedDate = new Date(this.value + "T00:00:00");
        const formattedDate = selectedDate.toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
const today = new Date();
today.setHours(0, 0, 0, 0);
const timeDifference = selectedDate - today;
const daysRemaining = Math.ceil(
    timeDifference / (1000 * 60 * 60 * 24)
);
dateMessage.textContent =
    "Your selected collection date is: " + formattedDate +
    ". Preparation time: " + daysRemaining + " days.";
    });
}
// Start scroll animations
setupScrollAnimations();
// Start floating cart
setupFloatingCart();
});

// shared validations and helpers
const CONTACT_EMAIL = "info@sweetcakesbakery.co.za";   // change if needed 
const NAME_PATTERN  = /^[A-Za-z\u00C0-\u00FF' -]{2,30}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^(\+27|0)[0-9]{9}$/;     // 0721234567 or +27721234567
// Escape HTML to prevent XSS attacks
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}
function prettyDate(d) {
    return d.toLocaleDateString("en-ZA", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
}

// form validation and submission
function setupForm(form, rules, onValid) {
    const fields = Array.from(form.querySelectorAll("input, select, textarea"))
        .filter(field => rules[field.id]);
    function check(field) {
        const result = rules[field.id](field.value.trim());
        const errorSpan = document.getElementById(field.id + "-error");
        if (result !== true) {
            errorSpan.textContent = result;
            field.classList.add("invalid");
            return false;
        }
        errorSpan.textContent = "";
        field.classList.remove("invalid");
        return true;
    }
    fields.forEach(field => {
        field.addEventListener("blur", () => check(field));
        field.addEventListener("input", () => {
            if (field.classList.contains("invalid")) check(field);
        });
    });
    form.addEventListener("submit", event => {
        event.preventDefault();                  // stop the page reloading
        const results = fields.map(check);       // checks every field so all errors show
        if (results.every(Boolean)) {
            onValid();
        } else {
            fields[results.indexOf(false)].focus();
        }
    });
}

// interactive leaflet map for contact page and accordion
function setupMap() {
    const mapDiv = document.getElementById("map");
    if (!mapDiv || typeof L === "undefined") return;
    const map = L.map("map").setView([-25.98, 28.15], 9);   // shows both cities
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    L.marker([-25.7479, 28.2293]).addTo(map)
        .bindPopup("<strong>Sweet Cakes Bakery - Pretoria</strong><br>123 Bakery Street, Pretoria");
 
    L.marker([-26.2041, 28.0473]).addTo(map)
        .bindPopup("<strong>Sweet Cakes Bakery - Johannesburg</strong><br>456 Sweet Avenue, Johannesburg");
}
function setupAccordion() {
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const panel = button.nextElementSibling;
            const isOpen = button.classList.toggle("active");
            button.setAttribute("aria-expanded", isOpen);
            panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : null;
        });
    });
}

// this is for the enquiry page (replacement for the old block of code)
function setupEnquiryValidation() {
    const form = document.getElementById("enquiry-form");
    if (!form) return;
 
    const rules = {
        "first-name": v => NAME_PATTERN.test(v) || "Enter a valid first name (letters only, 2 to 30 characters).",
        "surname":    v => NAME_PATTERN.test(v) || "Enter a valid surname (letters only, 2 to 30 characters).",
        "email":      v => EMAIL_PATTERN.test(v) || "Enter a valid email, like name@example.com.",
        "phone":      v => PHONE_PATTERN.test(v.replace(/\s/g, "")) || "Enter a South African number, like 072 123 4567 or +27 72 123 4567.",
        "age":        v => (Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 120) || "Age must be a whole number from 1 to 120.",
        "gender":     v => v !== "" || "Please choose an option.",
        "message":    v => (v.length >= 5 && v.length <= 1000) || "Your order must be between 5 and 1000 characters.",
        "date":       v => {
            if (!v) return "Please choose your collection date.";
            const chosen = new Date(v + "T00:00:00");
            const earliest = new Date();
            earliest.setHours(0, 0, 0, 0);
            earliest.setDate(earliest.getDate() + 2);          // 2 days to prepare
            return chosen >= earliest || "Please choose a date at least 2 days from today.";
        }
    };
 
    setupForm(form, rules, () => processEnquiry(form));
}
 
async function processEnquiry(form) {
    const box = document.getElementById("enquiry-response");
    const button = form.querySelector("button[type='submit']");
 
    const first = form.querySelector("#first-name").value.trim();
    const wanted = new Date(form.querySelector("#date").value + "T00:00:00");
 
    // --- COST: read the cart that was saved on the menu page ---
    let savedCart = [];
    try {
        savedCart = JSON.parse(localStorage.getItem("sweetCakesCart")) || [];
    } catch (error) {
        savedCart = [];
    }
 
    let lines = "";
    let subtotal = 0;
    let totalQuantity = 0;
 
    savedCart.forEach(item => {
        const product = MENU[item.index];
        if (!product) return;
        const lineTotal = product.price * item.quantity;
        subtotal += lineTotal;
        totalQuantity += item.quantity;
        lines += "<li>" + escapeHtml(product.name) + " x " + item.quantity +
                 " = R" + lineTotal.toFixed(2) + "</li>";
    });
 
    const discount = totalQuantity >= 10 ? subtotal * 0.10 : 0;
    const total = subtotal - discount;
 
    let costHtml;
    if (totalQuantity > 0) {
        costHtml =
            "<ul>" + lines + "</ul>" +
            "<p><strong>Subtotal:</strong> R" + subtotal.toFixed(2) + "</p>" +
            (discount > 0 ? "<p><strong>10% bulk discount:</strong> -R" + discount.toFixed(2) + "</p>" : "") +
            "<p><strong>Total cost:</strong> R" + total.toFixed(2) + "</p>";
    } else {
        costHtml = "<p><strong>Cost:</strong> This is a custom order, so we will send you a quote within 24 hours.</p>";
    }
 
    // --- AVAILABILITY ---
    const sundayNote = wanted.getDay() === 0
        ? " Please collect before 14:00, because we close early on Sundays."
        : "";
    const availabilityHtml =
        "<p><strong>Availability:</strong> Yes, we can have your order ready for " +
        prettyDate(wanted) + "." + sundayNote + "</p>";
 
    // --- AJAX: send the data in the background (no page reload) ---
    box.hidden = false;
    box.innerHTML = "<p>Sending your enquiry...</p>";
    button.disabled = true;
 
    const data = {
        firstName: first,
        surname: form.querySelector("#surname").value.trim(),
        email: form.querySelector("#email").value.trim(),
        phone: form.querySelector("#phone").value.trim(),
        order: form.querySelector("#message").value.trim(),
        collectionDate: form.querySelector("#date").value
    };
 
    let statusText;
    let sentOk = false;
    try {
        // jsonplaceholder is a free TEST server that answers like a real one.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Server said no");
        sentOk = true;
        statusText = "Your enquiry was sent successfully. We will contact you soon.";
    } catch (error) {
        statusText = "We could not send your enquiry right now. Please check your internet and try again.";
    }
 
    box.innerHTML =
        "<h3>Thank you, " + escapeHtml(first) + "!</h3>" +
        costHtml + availabilityHtml +
        '<p class="send-status">' + statusText + "</p>";
 
    if (sentOk) {
        localStorage.removeItem("sweetCakesCart");   // the order has been placed
        form.reset();
    }
    button.disabled = false;
    box.scrollIntoView({ behavior: "smooth", block: "center" });
}

//contact form (validation and email)
function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
 
    const rules = {
        "contact-name":    v => NAME_PATTERN.test(v) || "Enter your name (letters only, 2 to 30 characters).",
        "contact-email":   v => EMAIL_PATTERN.test(v) || "Enter a valid email, like name@example.com.",
        "contact-phone":   v => v === "" || PHONE_PATTERN.test(v.replace(/\s/g, "")) || "Enter a South African number, like 072 123 4567 (or leave it empty).",
        "contact-type":    v => v !== "" || "Please choose the type of message.",
        "contact-message": v => (v.length >= 10 && v.length <= 500) || "Your message must be between 10 and 500 characters."
    };
 
    setupForm(form, rules, () => {
        const name  = form.querySelector("#contact-name").value.trim();
        const email = form.querySelector("#contact-email").value.trim();
        const phone = form.querySelector("#contact-phone").value.trim();
        const type  = form.querySelector("#contact-type").value;
        const text  = form.querySelector("#contact-message").value.trim();
 
        const subject = type + " from " + name;
        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + (phone || "not given") + "\n" +
            "Type of message: " + type + "\n\n" +
            text;
 
        // show the finished email on the page
        document.getElementById("preview-to").textContent = CONTACT_EMAIL;
        document.getElementById("preview-subject").textContent = subject;
        document.getElementById("preview-body").textContent = body;
 
        // the Send button opens the customer's email app, already filled in
        document.getElementById("send-email").href =
            "mailto:" + CONTACT_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
 
        const preview = document.getElementById("email-preview");
        preview.hidden = false;
        preview.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
 const ALLERGEN_KEYWORDS = {
    "Wheat (gluten)": ["wheat", "flour", "biscuit"],
    "Milk":           ["milk", "butter", "cream", "chocolate", "icing"],
    "Eggs":           ["egg"],
    "Peanuts":        ["peanut"],
    "Tree nuts":      ["hazelnut", "walnut", "almond"],
    "Sesame":         ["sesame"]
};
 
function findAllergens(ingredients) {
    const found = [];
    Object.keys(ALLERGEN_KEYWORDS).forEach(allergen => {
        const hit = ingredients.some(ingredient => {
            const text = ingredient.toLowerCase();
            if (allergen === "Milk" && text.includes("plant-based")) return false;
            return ALLERGEN_KEYWORDS[allergen].some(word => text.includes(word));
        });
        if (hit) found.push(allergen);
    });
    return found;
}