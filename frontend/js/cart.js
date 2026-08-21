const cart = [];

function addToCart(product) {
    cart.push(product);

    console.log(`${product.name} added to cart`);
}

function getCartItems() {
    return cart;
}

