export const addItemToCart=(cartItems, cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>
        cartItem.id===cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity:1}]
};//Importar en el reducer

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición 
// implementada por la función dada.

export const removeItemFromCart=(cartItems, cartItemToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemToRemove.id
    )

    if(existingCartItem.quantity===1) {
        //crea un nuevo arreglo con todos los elementos con id diferente
        //al que se le está pasando
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
    // (else) si no es uno, decrementa la Q
    return cartItems.map(cartItem=>
        cartItem.id===cartItemToRemove.id
        ?
        {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
    );
};//Importar en el reducer