
function cardItemEdit(product, price, isIncrementer){

    const productCount = getProductCount(product);
    let ProductNewCount = productCount;
    let phonePrice = 1219;
    let casePrice = 59;
    if(isIncrementer == true){
        ProductNewCount = productCount + 1;
    }
    if(isIncrementer == false && productCount > 1){
        ProductNewCount = productCount - 1;
    }
    document.getElementById(product + '-quantity').value = ProductNewCount;
    
    let productPrice = parseInt(0);
    if(product == 'phone'){
        productPrice = ProductNewCount * price;
        phonePrice = parseInt(productPrice);
    }
    if(product == 'case'){
        productPrice = ProductNewCount * price;
        casePrice = parseInt(productPrice);
    }
    document.getElementById(product + '-price').innerText = "$" + productPrice;
    calculateTotal();
}

function getProductCount(product){
    const productInput = document.getElementById(product + '-quantity');
    const productCount = parseInt(productInput.value);
    return productCount;
}
function calculateTotal(){
    const phoneCount = getProductCount('phone');
    const caseCount = getProductCount('case');
    const subtotalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subtotal-cost').innerText = "$" + subtotalPrice;

    const deliveryInput = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryInput);
    const totalPrice = subtotalPrice + deliveryCost;
    document.getElementById('total-cost').innerText = "$" + totalPrice;
}
// function phoneItemEdit(isIncrementer){
//     const phoneInput = document.getElementById('phone-quantity');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrementer == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrementer == false && phoneCount > 1){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const casePrice = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerText = "$" + casePrice;
// }


// ===============================
// function cardItemEdit(isIncrementer){
//     const caseInput = document.getElementById('case-quantity');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(isIncrementer == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrementer == false && caseCount > 1){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 59;
//     document.getElementById('case-price').innerText = "$" + casePrice;
// }


// function phoneItemEdit(isIncrementer){
//     const phoneInput = document.getElementById('phone-quantity');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrementer == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrementer == false && phoneCount > 1){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const casePrice = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerText = "$" + casePrice;
// }
// ========================================



// document.getElementById('case-incrementer').addEventListener('click', function(){
//     cardItemEdit(true);
// });

// document.getElementById('case-decrementer').addEventListener('click', function(){
//     cardItemEdit(false);
// });



// =================================
// document.getElementById('case-incrementer').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-quantity');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 59;
//     document.getElementById('case-price').innerText = "$ " + casePrice;
// });

// document.getElementById('case-decrement').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-quantity');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 59;
//     document.getElementById('case-price').innerText = "$ " + casePrice;
// });