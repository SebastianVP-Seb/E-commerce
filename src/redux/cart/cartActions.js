import CartActionTypes from "./cart.types";

const toggleCartHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});
//payload es opcional

//Artículo que se agregará al arreglo de cartItems en cartReducer
export const addItem=(item)=>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});//importar en CheckoutItem component

//Para eliminar artículos del carrito.
//El reducer hace a función
export const removeItemFromCart=(item)=>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});//importar en CheckoutItem component

export const removeItem=(item)=>({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});//importar en CheckoutItem component

export default toggleCartHidden;