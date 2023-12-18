const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract'); 
const quantity = document.querySelector('#quantity');
const product__form = document.querySelector('.product__form')

/* Agregue el preventDefault porque se recargaba la pagina con cada click en el mas o menos del contador
y por eso no sumaba como correspondia */ 

add.addEventListener('click', (event) => {
    event.preventDefault();
    if (!isNaN(Number(quantity.value))) {
        quantity.value = Number(quantity.value) + 1;
    }
});

subtract.addEventListener('click', (event) => {
    event.preventDefault();
    if (!isNaN(Number(quantity.value)) && quantity.value > 0) {
        quantity.value = Number(quantity.value) - 1;
    }
});