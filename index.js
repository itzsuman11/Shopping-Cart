
let cart=[]
const Item = function(title, price,imagSrc,count){
this.name = title
this.price = price
this.img = imagSrc
this.count = count

};




const addToCartButtons = document.getElementsByClassName('shop-item-button')
 for(var i=0; i< addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCart)
 }




function addToCart(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imagSrc= shopItem.getElementsByClassName('item-img')[0].src
    var count = parseFloat(shopItem.getElementsByClassName('item-count')[0].value)
    addItemToCart(title,price,imagSrc,count)
}

function addItemToCart(title,price,imagSrc,count){
    // cart.forEach((i) => {

    
    for (var i in cart){
        // if(cart[i].count !=1 ){
        //     alert("Select quantity more than 0")
        // }
        // else{

        
        if(cart[i].name === title){
            cart[i].count += count;
            // console.log(cart)
            return;
        }
    }
//   })
//}
    var item = new Item(title, price,imagSrc,count);
    cart.push(item)
    
     console.log(cart)
//     // console.log(cartTotalCost());

}

cart.forEach((i) => {
    console.log(cart)
})

// for(i=0;i<cart.length;i++){

//     var cartRow = document.createElement('div');
//     console.log(cartRow);
//     cartRow.classList.add('cart-row');
//     var cartItems = document.getElementById('cart-items');
//     console.log(cartItems);
//     var cartRowsContents = `
//     <div class="cart-item cart column">
//         <img class="cart-item-image" src="${cart[i].img}" width="100">  
//         <span class="cart-item-title">${cart[i].name}</span>
//         </div>
//         <span class="cart-price-cart-column">${cart[i].price}</span>
//         <div class="cart-quantity-cart-column">
//             <input class="cart-quantity-input" type="number" value="${cart[i].count}" >
//             <button class="cart-item-remove" type="button">Remove</button>
//         </div>`;
//     cartRow.innerHTML = cartRowsContents;
//     cartItems.append(cartRow);
// }


// removeCartItem = (name) => {
//     for(var i in cart){
//         if(cart[i].name === name){
//             cart.splice(i,1)
//         }
//     }
// }

// addItemToCart("Nuts",210,'images/Nuts1.jpg',2)
// // console.log(cart);
// addItemToCart("Chocolate",100,'images/Chocolate1.jpg',3)
// // console.log(cart);
// addItemToCart("Nuts",210,'images/Nuts1.jpg',2)
// addItemToCart("Cookies",210,'images/Cookies1.jpg',2)
// // console.log(cart);
// removeCartItem("Nuts");
// console.log(cart);

//  cartTotalCost =  () =>{
//     var totalCost = 0;
//     for(var i in cart){

//         totalCost += (cart[i].price * cart[i].count);
//     }
//     return totalCost
// }

// console.log(cartTotalCost())
