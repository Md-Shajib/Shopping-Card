
function cardItemEdit(isIncrementer){
    const caseInput = document.getElementById('case-quantity');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrementer == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrementer == false && caseCount > 1){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const casePrice = caseNewCount * 59;
    document.getElementById('case-price').innerText = "$" + casePrice;
}


function phoneItemEdit(isIncrementer){
    const phoneInput = document.getElementById('phone-quantity');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(isIncrementer == true){
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrementer == false && phoneCount > 1){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const casePrice = phoneNewCount * 1219;
    document.getElementById('phone-price').innerText = "$" + casePrice;
}
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