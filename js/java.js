
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
    const commonAllergens = [
        "Wheat",
        "Milk",
        "Eggs",
        "Peanuts",
        "Hazelnuts",
        "Walnuts",
        "Sesame"
    ];
    const detectedAllergens = ingredients.filter(function(ingredient) {
        return commonAllergens.some(function(allergen) {
            return ingredient.toLowerCase().includes(allergen.toLowerCase());
        });
    });
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

// Enquiry form validation and submission
const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const firstName = document.getElementById("first-name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = Number(document.getElementById("age").value);
        const order = document.getElementById("message").value.trim();
        const date = document.getElementById("date").value;
        if (firstName === "" || surname === "" || email === "" ||
            order === "" || date === "" || age < 1 || age > 120) {
            alert("Please complete all fields correctly.");
            return;
        }
        alert("Thank you, " + firstName +
              "! Your enquiry has been submitted successfully.");
        enquiryForm.reset();   
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