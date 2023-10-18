let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Adicolor Classics Trefoil Hoodie',
        tag: 'Adidas',
        price: 349,
        inCart: 0
    },
    {
        name: 'Nike Jordan Dri-fit X Zion',
        tag: 'Nike',
        price: 219,
        inCart: 0
    },
    {
        name: 'Tntco Balloon Pants Olive Green',
        tag: 'Tntco',
        price: 299,
        inCart: 0
    },
    {
        name: 'ADLV Black Donut 5 Short Sleeve Tee Black',
        tag: 'ADLV',
        price: 199,
        inCart: 0
    },
    {
        name: 'Adidas Essentitals 3-Stripes Hoodie',
        tag: 'Adidas',
        price: 249,
        inCart: 0
    },
    {
        name: 'Nike Jordan Flight MVP 85',
        tag: 'Nike',
        price: 185,
        inCart: 0
    },
    {
        name: 'ADLV Black Rabbit Short Sleeve Tee Black',
        tag: 'ADLV',
        price: 199,
        inCart: 0
    },
    {
        name: 'Tntco JP Tiger Tee Black',
        tag: 'Tntco',
        price: 189,
        inCart: 0
    },
    {
        name: 'Nike Sportswear Jdi Black',
        tag: 'Nike',
        price: 99,
        inCart: 0
    },
    {
        name: 'Adidas Rose Tee',
        tag: 'Adidas',
        price: 139,
        inCart: 0
    }
];


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]); 
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
    product.inCart = 1;
    cartItems = {
        [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
   
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    console.log(cartItems); 
    let cartCost = localStorage.getItem('totalCost');
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <img src="./"
                <div class="tag">${item.tag}</div>
                <span>${item.name}</span>
            </div>
            <div class="price">RM${item.price}.00</div>
            <div class="quantity-1">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
                RM${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    RM${cartCost}.00
                </h4>
        `;
    }
}

function deleteItems(){
    localStorage.clear();
}

onLoadCartNumbers();
displayCart();
