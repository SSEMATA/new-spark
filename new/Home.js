// Handling Profile Picture Upload
function uploadProfile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            document.getElementById("profile-image").src = reader.result;
            toggleProfileMenu(false); // Closing the menu
            document.getElementById("upload-photo").hidden = true; // Hiding upload button
            document.getElementById("change-photo").hidden = true; // Ensuring Change is hidden initially
            document.getElementById("delete-photo").hidden = true; // Ensuring Delete is hidden initially
        };
        reader.readAsDataURL(file);
    }
}

// Handle Profile Photo Deletion
function deleteProfile() {
    document.getElementById("profile-image").src = "profile-icon.png"; // Reseting to default icon
    document.getElementById("upload-photo").hidden = false; // Showing upload button again
    document.getElementById("change-photo").hidden = true; // Hiding change button
    document.getElementById("delete-photo").hidden = true; // Hiding delete button
    toggleProfileMenu(false); // Closing the menu after deleting
}

// Toggle Profile Menu Visibility
function toggleProfileMenu(show) {
    const menu = document.getElementById("profile-menu");
    menu.hidden = !show;

    if (show) {
        const profileImageSrc = document.getElementById("profile-image").src;
        const isDefaultImage = profileImageSrc.includes("profile-icon.png");

        document.getElementById("upload-photo").hidden = !isDefaultImage; // Show only if no photo uploaded
        document.getElementById("change-photo").hidden = isDefaultImage; // Show only if photo uploaded
        document.getElementById("delete-photo").hidden = isDefaultImage; // Show only if photo uploaded
    }
}

// Close Menu on Outside Click
document.addEventListener("click", (event) => {
    const menu = document.getElementById("profile-menu");
    const profilePic = document.querySelector(".profile-pic");
    if (!menu.contains(event.target) && !profilePic.contains(event.target)) {
        menu.hidden = true;
    }
});

// Opening Menu When Clicking on Profile Picture
document.querySelector(".profile-pic").addEventListener("click", (event) => {
    const menu = document.getElementById("profile-menu");
    toggleProfileMenu(menu.hidden); // Toggle the menu visibility
});

// Handling Search Functionality
function searchFood(event) {
    const searchQuery = event.target.value.toLowerCase();
    const searchResultsContainer = document.getElementById("search-results");

    // Array of items with their names, images, and links
    const items = [
        { name: 'Africa coffee', category: 'food', img: 'Africa coffee.jpg', link: '#Africa coffee' },
        { name: 'Balanced meal', category: 'food', img: 'Balanced meal.jpeg', link: '#Balanced meal' },
        { name: 'batter milk', category: 'food', img: 'batter milk.jpg', link: '#batter milk' },
        { name: 'beef in Gnuts', category: 'food', img: 'beef in Gnuts.jpg', link: '#beef in Gnuts' },
        { name: 'beef pilau', category: 'food', img: 'beef pilau.jpg', link: '#beef pilau' },
        { name: 'boiled fish and chips', category: 'food', img: 'boiled fish and chips.jpg', link: '#boiled fish and chips' },
        { name: 'breakfast', category: 'food', img: 'breakfast.jpg', link: '#breakfast' },
        { name: 'burger+chips', category: 'food', img: 'burger+chips.jpeg', link: '#burger+chips' },
        { name: 'chicken curry masala', category: 'food', img: 'chicken curry masala.jpg', link: '#chicken curry masala' },
        { name: 'chicken piece', category: 'food', img: 'chicken piece.png', link: '#chicken piece' },
        { name: 'chicken pilau3', category: 'food', img: 'chicken pilau3.jpg', link: '#chicken pilau3' },
        { name: 'chicken rice', category: 'food', img: 'chicken rice.avif', link: '#chicken rice' },
        { name: 'chicken+rice', category: 'food', img: 'chicken+rice.jpg', link: '#chicken+rice' },
        { name: 'chips and chicken', category: 'food', img: 'chips and chicken.png', link: '#chips and chicken' },
        { name: 'chips', category: 'food', img: 'chips.jpeg', link: '#chips' },
        { name: 'Balanced meal', category: 'food', img: 'Balanced meal.jpeg', link: '#chips' },
        { name: 'batter milk', category: 'food', img: 'batter milk.jpg', link: '#batter milk' },
        { name: 'beef in Gnuts', category: 'food', img: 'beef in Gnuts.jpg', link: '#beef in Gnuts' },
        { name: 'beef pilau', category: 'food', img: 'beef pilau.jpg', link: '#beef pilau' },
        { name: 'boiled fish and chips', category: 'food', img: 'boiled fish and chips.jpg', link: '#boiled fish and chips' },
        { name: 'breakfast', category: 'food', img: 'breakfast.jpg', link: '#breakfast' },
        { name: 'burger+chips', category: 'food', img: 'burger+chips.jpeg', link: '#burger+chips' },
        { name: 'chicken curry masala', category: 'food', img: 'chicken curry masala.jpg', link: '#chicken curry masala' },
        { name: 'chicken piece', category: 'food', img: 'chicken piece.png', link: '#chicken piece' },
        { name: 'chicken pilau3', category: 'food', img: 'chicken pilau3.jpg', link: '#chicken pilau3' },
        { name: 'chicken rice', category: 'food', img: 'chicken rice.avif', link: '#chicken rice' },
        { name: 'chicken+rice', category: 'food', img: 'chicken+rice.jpg', link: '#chicken+rice' },
        { name: 'chips and chicken', category: 'food', img: 'chips and chicken.png', link: '#chips and chicken' },
    ];

    // Filter results based on the search query
    const results = items.filter(item => item.name.toLowerCase().includes(searchQuery));

    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (searchQuery && results.length > 0) {
        searchResultsContainer.style.display = 'grid'; // Show the grid layout

        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');

            // Create the anchor tag to wrap the image and name
            const linkElement = document.createElement('a');
            linkElement.href = result.link;
            linkElement.classList.add('result-link');  // Add a class for styling if needed

            // Create the image element
            const imgElement = document.createElement('img');
            imgElement.src = result.img;
            imgElement.alt = result.name;

            // Create the name element
            const nameElement = document.createElement('span');
            nameElement.textContent = result.name;

            // Append image and name to the link element
            linkElement.appendChild(imgElement);
            linkElement.appendChild(nameElement);

            // Append the link element to the result container
            resultElement.appendChild(linkElement);

            // Append result to the container
            searchResultsContainer.appendChild(resultElement);
        });
    } else if (searchQuery) {
        searchResultsContainer.style.display = 'block'; // Show empty container with no results
        searchResultsContainer.innerHTML = '<div>No matching results found</div>';
    } else {
        searchResultsContainer.style.display = 'none'; // Hide the container if no query
    }
}
// Getting user details from localStorage/website/linking
const userDetails = JSON.parse(localStorage.getItem("userDetails"));

if (userDetails) {
    // Populate user name
    document.getElementById("user-name").textContent = userDetails.name;

    // additional  future populate fields 
    console.log("User Details: ", userDetails);
}
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartBadge = document.getElementById("cart-badge");
    const cartContainer = document.querySelector(".cart-table-container");
    const cartItems = document.getElementById("cart-items");
    const totalItemsEl = document.getElementById("total-items");
    const totalPriceEl = document.getElementById("total-price");
    const collapseBtn = document.getElementById("collapse-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const orderBtn = document.querySelector(".order-btn");
    const orderFormContainer = document.querySelector(".order-form-container");
    const orderForm = document.getElementById("order-form");

    let cart = {}; // Object to store cart items
    let totalItems = 0;
    let totalPrice = 0;

    // Function to update cart badge and cart table
    const updateCartUI = () => {
        // Update cart badge
        cartBadge.textContent = totalItems;

        // Update cart table
        cartItems.innerHTML = "";
        for (let id in cart) {
            const item = cart[id];
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>UGX ${item.price * item.quantity}</td>
                <td><button class="remove-btn" data-id="${id}">Remove</button></td>
            `;
            cartItems.appendChild(row);
        }

        // Update total items and total price
        totalItemsEl.textContent = totalItems;
        totalPriceEl.textContent = `UGX ${totalPrice}`;
    };

    // Add event listener to food items
    document.querySelectorAll(".food-item").forEach(foodItem => {
        const addToCartBtn = foodItem.querySelector(".add-to-cart");
        const quantityControls = foodItem.querySelector(".quantity-controls");
        const minusBtn = quantityControls.querySelector(".minus");
        const plusBtn = quantityControls.querySelector(".plus");
        const quantityDisplay = quantityControls.querySelector(".item-quantity");
        const id = foodItem.dataset.id;
        const name = foodItem.querySelector("h3").textContent;
        const price = parseInt(foodItem.querySelector("p:nth-of-type(2)").textContent.replace("Price: UGX ", ""));

        let quantity = 0;

        // Add to Cart functionality
        addToCartBtn.addEventListener("click", () => {
            addToCartBtn.style.display = "none";
            quantityControls.style.display = "flex";
            quantity = 1;
            cart[id] = { name, price, quantity };
            totalItems += 1;
            totalPrice += price;
            updateCartUI();
            quantityDisplay.textContent = quantity;
        });

        // Minus button functionality
        minusBtn.addEventListener("click", () => {
            if (quantity > 0) {
                quantity -= 1;
                totalItems -= 1;
                totalPrice -= price;

                if (quantity === 0) {
                    delete cart[id];
                    addToCartBtn.style.display = "block";
                    quantityControls.style.display = "none";
                } else {
                    cart[id].quantity = quantity;
                }

                updateCartUI();
                quantityDisplay.textContent = quantity;
            }
        });

        // Plus button functionality
        plusBtn.addEventListener("click", () => {
            quantity += 1;
            totalItems += 1;
            totalPrice += price;
            cart[id].quantity = quantity;
            updateCartUI();
            quantityDisplay.textContent = quantity;
        });
    });

    // Toggle cart visibility
    cartIcon.addEventListener("click", () => {
        if (cartContainer.style.display === "none") {
            cartContainer.style.display = "block";
        } else {
            cartContainer.style.display = "none";
        }
    });

    // Collapse button functionality
    collapseBtn.addEventListener("click", () => {
        cartContainer.style.display = "none";
    });

    // Cancel button functionality
    cancelBtn.addEventListener("click", () => {
        cart = {};
        totalItems = 0;
        totalPrice = 0;

        // Reset food items
        document.querySelectorAll(".food-item").forEach(foodItem => {
            const addToCartBtn = foodItem.querySelector(".add-to-cart");
            const quantityControls = foodItem.querySelector(".quantity-controls");
            const quantityDisplay = quantityControls.querySelector(".item-quantity");

            addToCartBtn.style.display = "block";
            quantityControls.style.display = "none";
            quantityDisplay.textContent = "0";
        });

        updateCartUI();
    });

    // Order button functionality
    orderBtn.addEventListener("click", () => {
        orderFormContainer.style.display = "block";
        cartContainer.style.display = "none";
    });

    // Order form submission
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`Order placed successfully!\nReceipt No: ${Date.now()}\nTotal: UGX ${totalPrice}`);

        // Reset everything
        cart = {};
        totalItems = 0;
        totalPrice = 0;

        document.querySelectorAll(".food-item").forEach(foodItem => {
            const addToCartBtn = foodItem.querySelector(".add-to-cart");
            const quantityControls = foodItem.querySelector(".quantity-controls");
            const quantityDisplay = quantityControls.querySelector(".item-quantity");

            addToCartBtn.style.display = "block";
            quantityControls.style.display = "none";
            quantityDisplay.textContent = "0";
        });

        orderFormContainer.style.display = "none";
        updateCartUI();
    });

    // Remove button functionality in cart
    cartItems.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const id = e.target.dataset.id;
            totalItems -= cart[id].quantity;
            totalPrice -= cart[id].price * cart[id].quantity;
            delete cart[id];
            updateCartUI();

            // Reset food item quantity to 0
            const foodItem = document.querySelector(`.food-item[data-id="${id}"]`);
            if (foodItem) {
                const addToCartBtn = foodItem.querySelector(".add-to-cart");
                const quantityControls = foodItem.querySelector(".quantity-controls");
                const quantityDisplay = quantityControls.querySelector(".item-quantity");

                addToCartBtn.style.display = "block";
                quantityControls.style.display = "none";
                quantityDisplay.textContent = "0";
            }
        }
    });
});


//filter
// JavaScript to show/hide dropdown on hover
const filterIcon = document.getElementById('filter-icon');
const filterDropdown = document.getElementById('filter-dropdown');
const filterContainer = document.querySelector('.filter-container');

// Show dropdown when the filter icon is hovered
filterIcon.addEventListener('mouseenter', () => {
  filterDropdown.style.display = 'block';
});

// Hide dropdown when the mouse leaves the filter icon or dropdown
filterContainer.addEventListener('mouseleave', () => {
  filterDropdown.style.display = 'none';
});
