import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import '../../css/style.css';

import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import {createStructuredSelector} from 'reselect';

import {withRouter} from 'react-router-dom';

//Para ocultar el menú desplegable del carrito
import toggleCartHidden from '../../redux/cart/cartActions';


//cartItems viene de CartItem, los items que han sido agregados
const CartDropDown=({cartItems, history, dispatch})=>(
    <div className='cart-dropdown'>
        <div className="cart-items" >
            {
                //condicionando el render de un mensaje de carrito vacío
                cartItems.length ?//pregunta si es verdadero (mayor que 0)
                (
                    cartItems.map(cartItem=>
                    <CartItem key={cartItem.id} item={cartItem}/>)
                )
                : (
                    <span className="empty-message">
                        Your cart is empty</span>
                )
            }
        </div>
        {/* Forma 2 de navegar dinámicamente en el DOM entre págs (history.push) */}
        <CustomButton onClick={
            ()=>{history.push('/checkout');
            //para ocultar el menú desplegable del carrito
                dispatch(toggleCartHidden());
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
);

//se extraen del state de cartReducer, cartItems es el arreglo vacío definido
// const mapStateToProps=({cart:{cartItems}})=>({
//     cartItems
// });

//de esta forma se asegura que este componente no se re-renderizará cuando el state cambie y no
//esté relacionado con cartItems
// const mapStateToProps=(state)=>({
//     cartItems: selectCartItems(state)
// });

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

//withRouter pasa el match, location y history dentro del componente que 
// se está envolviendo. De esta forma, este componente (CartDropDown) ya
// tiene aceso a history 

// Connect pasa dispatch dentro del componente como un prop si no se le pasa un segundo
// argumento a connect, por lo que ya no es necesario escribir el método 
//mapDispatchToProps