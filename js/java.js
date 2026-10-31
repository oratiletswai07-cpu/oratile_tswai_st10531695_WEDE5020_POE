
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
    ".body-1, .body-2, .body-3, .menu-start, .menu-sidebar, .product-card"
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



// START THE WEBSITE FEATURES


document.addEventListener("DOMContentLoaded", function() {

    // Menu page
    if (document.getElementById("menu-list")) {

        displayProducts();
        setupCategories();
        setupSearchAndSort();
        setupShoppingCart();

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
});
