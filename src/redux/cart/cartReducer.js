import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const INITIAL_STATE={
    hidden: true,
    cartItems: []
};

//los case están escuchando las acciones definidas en cartAction

const cartReducer=(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        // case 'TOGGLE_CART_HIDDEN':
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, 
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //se copia el state que ya se tiene (el carrito de compras) y se agrega la nueva carga
                //(el nuevo artículo)
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
                //action.payload es el item que se quiere agregar
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
                //si el id es diferente al que viene de payload (del que se quiere quitar)
                //entonces lo mantiene (es true), si es igual al que viene de la carga
                // lo saca del arreglo
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
};

export default cartReducer;