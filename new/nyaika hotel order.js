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
