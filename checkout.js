
let checkoutPanel = document.getElementById("product-painel");
let products = document.querySelectorAll(".product");
let button_minus = document.querySelectorAll(".fas fa-minus");
let button_plus = document.querySelectorAll(".fas fa-plus");
let remove = document.querySelectorAll(".remove-product");


let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let shipping = document.getElementById("shipping");
let total = document.getElementById("total");
let singleTotal = 0;
// function:  

TotalPrice();

function TotalPrice() {
    singleTotal = 0;
    const product_total = document.querySelectorAll(".product-line-price");
    product_total.forEach((e) => {
        singleTotal += +e.innerText;
       
    });

    subtotal.innerHTML = singleTotal.toFixed(2);
    tax.innerHTML = (singleTotal * 0.18).toFixed(2);

    if (subtotal.textContent == "0.00") {
        shipping.innerText = "0";
        
    } else if (+subtotal.innerText >= 250) {
        shipping.innerText = "Free Shopping";
        
    } else if (+subtotal.innerText > 150) {
        shipping.innerText = "10";
        
    }  else {
        shipping.innerText = "15.99";
        
    }

    if (shipping.innerText != "Free Shopping") {
        total.innerHTML = (singleTotal * 1.18 +  +shipping.innerText).toFixed(2);
        
    }   else {
        total.innerHTML = (singleTotal * 1.18).toFixed(2);
    }

    singleTotal = 0;
   
}




checkoutPanel.addEventListener("click", () => {});
let loading = document.querySelector(".loading");
products.forEach((product) => {

    product.addEventListener("click", (e) => {
        const quantity = product.querySelector("#product-quantity");
        let singlePrice = product.getElementsByTagName("strong")[0].innerText;
        const product_total = product.querySelector(".product-line-price");

        if (e.target.classList.contains("fa-minus")) {
            if (quantity.innerText > 1) {
                quantity.innerText --;
                product_total.innerText = (singlePrice * +quantity.innerText).toFixed(2);
                // singleTotal = (singlePrice * quantity);
                loading.style.visibility = "visible";
                TotalPrice();

            } else {
                confirm("Are You Sure to remove Product from Form") ? 
                (product.remove(), 
                loading.style.visibility = "visible",
                quantity.innerText --,
                TotalPrice())
                : null;
            }


            }   else if (e.target.classList.contains("fa-plus")) {
                quantity.innerText ++;
                product_total.innerText = (singlePrice * +quantity.innerText).toFixed(2);
                loading.style.visibility = "visible";
                TotalPrice();
                

            } else if (e.target.classList.contains("remove-product")) {
                confirm("Are You Sure to remove Product from Form") ? 
                (product.remove(),
                loading.style.display = "none",
                quantity.innerText --,
                TotalPrice()) 
                : null;

            }
            
        })
})



