// ITERATION 1

// function updateSubtotal(product) {
//   console.log('Calculating subtotal, yey!');


  //... your code goes here
//}

function updateSubtotal(product) {
  // Steps 1 & 2 el innerhtml te coge lo que le dices en el parentesis
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // Step 3
  const subtotal = Number(price * quantity);
  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');
  // Step 5
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

// function calculateAll() {
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   const singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  
  function calculateAll(arrayOfProducts) {
    // let acumulable = 0
    // for (let i = 0; i < arrayOfProducts.length ; i++) {
    //   const prices = updateSubtotal(arrayOfProducts[i])
    //   acumulable += prices
    // }
    // return acumulable

    var pricesArrow = 0 ; 
    pricesArrow += updateSubtotal((element) => {
    return updateSubtotal(arrayOfProducts[element])
    })
    
  }
  



  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
