// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
let subtotalWithDiscount = 0;          
// Exercise 1
function buy(id) 
{
    // 1. Loop for to the array products to get the item to add to cart
    let posPro = 0;                                

    for(let i = 0; i < products.length; i++)        
    {
        if(products[i].id == id)                   
        {
            posPro = i;                             
            break;                                  
        }
    }

    // 2. Add found product to the cart array
    let posExiste = -1;                             

    for(let i = 0; i < cart.length; i++)            
    {
        if(cart[i].producto.id == id)               
        {
            posExiste = i;                          
            break;                                  
        }
    }

    if(posExiste != -1)                             
    {
        cart[posExiste].quantity++;                 
    }
    else
    { 
        let proCart = {
            producto: products[posPro],
            quantity: 1
        };
    
        cart.push(proCart);                          
    }     
}

// Exercise 2
function cleanCart() 
{
    cart = [];          
    printCart();        
}

// Exercise 3
function calculateTotal() 
{
    for(let i = 0; i < cart.length; i++)                                
    {
        total += (cart[i].producto.price * cart[i].quantity);           
    }
}
    
// Exercise 4

function applyPromotionsCart() {

    subtotalWithDiscount = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i].producto;

        if (product.offer && cart[i].quantity >= product.offer.number) {
            const discountPercent = product.offer.percent / 100;
            const discountedPrice = product.price * (1 - discountPercent);

            cart[i].producto.price = discountedPrice;
            subtotalWithDiscount += discountedPrice * cart[i].quantity;
        } else {
            subtotalWithDiscount += product.price * cart[i].quantity;
        }
    }
}


// Exercise 5
function printCart() {
    let tBody = document.getElementById("cart_list");
    tBody.innerHTML = '';
    
    let totalPrice = document.getElementById('total_price');
    let totalP = 0;

    for (let i = 0; i < cart.length; i++) {
        let tr = document.createElement('tr');
        let product = cart[i].producto;

        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = product.name;

        let td1 = document.createElement('td');
        td1.innerHTML = '$' + product.price; 

        let td2 = document.createElement('td');
        td2.innerHTML = cart[i].quantity;

        let td3 = document.createElement('td');
        let subtotal = product.price * cart[i].quantity; 

        if (product.offer && cart[i].quantity >= product.offer.number) {
            const discountPercent = product.offer.percent / 100;
            const discountedPrice = product.price * (1 - discountPercent);
            subtotal = discountedPrice * cart[i].quantity; 
            td1.innerHTML = '$' + discountedPrice; 
        }

        td3.innerHTML = '$' + subtotal;
        totalP += subtotal;

          let removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.classList.add('btn', 'btn-danger', 'ms-2');
          removeButton.setAttribute('onclick', `removeFromCart(${cart[i].producto.id})`);

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(removeButton);
        tBody.appendChild(tr);
    }

    totalPrice.innerHTML = totalP;
}



// ** Nivell II **

// Exercise 7
function removeFromCart(id) 
{
    let posExiste = -1;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].producto.id == id) {
            posExiste = i;
            break;
        }
    }

    if (posExiste != -1) {
        cart[posExiste].quantity--;

        if (cart[posExiste].quantity === 0) {
            cart.splice(posExiste, 1); 
        }

        applyPromotionsCart();

        calculateTotal();

        printCart();
    }
}


function open_modal() 
{
    printCart();
}