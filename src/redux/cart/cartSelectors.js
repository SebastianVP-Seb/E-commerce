import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

//cartItems vive dentro de cart

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.cartItems
); //importar en cartDropDown

//Al usar createSelector, ahora es un memoized selector

//para hidden, está dentro de cartReducer
export const selectCartHidden=createSelector(//importar en Header component
    [selectCart],
    cart=>cart.hidden
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumulator, cartItem)=>accumulator+cartItem.quantity,0)
); //importar en el componente Cart

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumulator, cartItem)=>accumulator+cartItem.quantity*cartItem.price, 0)
);//importar en checkoutS