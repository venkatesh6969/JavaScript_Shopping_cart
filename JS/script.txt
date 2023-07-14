// cart -functionality

let cartIcon = document.querySelector("#cartIcon");
let cart = document.querySelector(".cart");
let hideCart = document.querySelector("#closeCart");





// Display cart

cartIcon.onclick = ()=>{
    cart.classList.add("cart-active");
};

// Exit -cart
hideCart.onclick = ()=>{
    cart.classList.remove("cart-active");
};

//cart deletion
if(document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded",ready)
}
else
{
    ready()
}

function ready(){
    let deleteCart = document.getElementsByClassName("cart-remove");
    for(let i=0; i<deleteCart.length; i++)
    {
        let deleteButton = deleteCart[i]
        deleteButton.addEventListener("click", deleteCartItem)
    }
}

function deleteCartItem(e){
    let clickDeleteButton = e.target;
    clickDeleteButton.parentElement.remove();
}

//Quantity
let quantityInput = document.getElementsByClassName("cart-quantity");
for(let i=0; i<quantityInput; i++)
{
    
}



//total price

function computeTotal()
{
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBox = cartContent.document.getElementsByClassName("cart-box");
    let total;
    for(let i=0; i<cartBox.length; i++)
    {
        let cartBoxes = cartBox[i];
        let priceField = cartBoxes.getElementsByClassName("cart-price");
        let quantity = cartBoxes.getElementsByClassName("cart-quantity");
        let price = parseFloat()(priceField.innerText).replace("₹","");
        let newQuantity = quantity.value;
        total = total + price * newQuantity;
        document.getElementsByClassName("total-price")[0].innerText = "₹" + total;


    }
}