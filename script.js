document.addEventListener('DOMContentLoaded', () => {
    // Selecciona elementos del DOM
    const agregarCarrito = document.querySelectorAll('.agregar-carrito');
    const cartContainer = document.getElementById('cart-container');
    const cart = document.getElementById('cart');
    const cartTotal = document.getElementById('cart-total');
    const closeCartButton = document.getElementById('close-cart');
    const abrirCarrito = document.getElementById('abrir-carrito');

    //contador de productos header
    // Selecciona el elemento del contador
    const contador = document.getElementById('contador');

    // Lista de productos en el carrito
    let cartItems = [];

    // Función para actualizar el carrito
    const updateCart = () => {
        cart.innerHTML = '';
        let total = 0;
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            
            const itemName = document.createElement('span');
            itemName.classList.add('cart-item-name');
            itemName.textContent = `${item.product} - $${item.price}`;
            
            const removeButton = document.createElement('button');
            removeButton.classList.add('cart-item-remove');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => {
                cartItems.splice(index, 1);
                updateCart();
                // Decrementa la cantidad y actualiza el contador
                if (cantidad > 0) {
                    cantidad--;
                    contador.textContent = cantidad;
                }
            });

            cartItem.appendChild(itemName);
            cartItem.appendChild(removeButton);
            cart.appendChild(cartItem);
            
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    };

    // Función para agregar un producto al carrito
    const addToCart = (product, price) => {
        cartItems.push({ product, price });
        cartContainer.classList.remove('hidden');
        updateCart();
    };

    // Añade eventos a los botones "Agregar al Carrito"
    agregarCarrito.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(product, price);
        });
    });

    // Evento para abrir el carrito
    abrirCarrito.addEventListener('click', () => {
        cartContainer.classList.remove('hidden'); // Asegúrate de que 'hidden' sea la clase que oculta el carrito.
    });

    // Evento para cerrar el carrito
    closeCartButton.addEventListener('click', () => {
        cartContainer.classList.add('hidden');
    });


    
    // Inicializa el contador en 0
    let cantidad = 0;

    // Añade un evento click a cada botón
    agregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            // Incrementa la cantidad y actualiza el contador
            cantidad++;
            contador.textContent = cantidad;
        });
    });
    


});

