document.addEventListener('DOMContentLoaded', function () {
    const subtractButtons = document.querySelectorAll('#subtract');
    const addButtons = document.querySelectorAll('#add');
    const quantityInputs = document.querySelectorAll('.item__input');
    const totalPrices = document.querySelectorAll('.cart-table__total-price');
    const totalPriceElement = document.getElementById('totalPrice');
    const subTotalPriceElement = document.getElementById('subTotalPrice');
    const totalElements = document.getElementById('totalElements'); 
    
    let totalQuantity = 0;
    let totalPrice = 0;

    subtractButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentQuantity = Number(quantityInputs[index].value);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityInputs[index].value = currentQuantity;
                totalPrices[index].textContent = `$ ${currentQuantity * 1799.99}`;
                actualizarTotales();
            }
        });
    });

    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentQuantity = Number(quantityInputs[index].value);
            currentQuantity++;
            quantityInputs[index].value = currentQuantity;
            totalPrices[index].textContent = `$ ${currentQuantity * 1799.99}`;
            actualizarTotales();
        });
    });

    function actualizarTotales() {
        totalQuantity = Array.from(quantityInputs).reduce((sum, input) => sum + Number(input.value), 0);
        totalPrice = Array.from(totalPrices).reduce((sum, price) => sum + Number(price.textContent.replace('$', '').trim()), 0);
        totalElements.textContent = totalQuantity;
        totalPriceElement.textContent = `$ ${totalPrice.toFixed(2)}`;
        subTotalPriceElement.textContent = `$ ${totalPrice.toFixed(2)}`;

    }
});
