document.addEventListener('DOMContentLoaded', function () {
    const subtractButtons = document.querySelectorAll('#subtract');
    const addButtons = document.querySelectorAll('#add');
    const quantityInputs = document.querySelectorAll('.item__input');
    const totalPrices = document.querySelectorAll('.cart-table__total-price');

    subtractButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentQuantity = Number(quantityInputs[index].value);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityInputs[index].value = currentQuantity;
                totalPrices[index].textContent = `$ ${currentQuantity * 1799.99}`;
            }
        });
    });

    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let currentQuantity = Number(quantityInputs[index].value);
            currentQuantity++;
            quantityInputs[index].value = currentQuantity;
            totalPrices[index].textContent = `$ ${currentQuantity * 1799.99}`;
        });
    });
});
