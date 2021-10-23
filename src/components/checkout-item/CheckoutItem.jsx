import React from 'react';

import '../../css/style.css';

import {connect} from 'react-redux';

import {removeItemFromCart, addItem, removeItem} from '../../redux/cart/cartActions';
import CartItem from '../cart-item/CartItem';

//De esta forma no se tiene acceso a cartItem, por lo tanto hacer un return explícito
// const CheckoutItem=({cartItem:{name,quantity,price,imageUrl}})=>(
const CheckoutItem=({cartItem, clearItem, addItem, removeItem})=>{

    const {name,quantity,price,imageUrl}=cartItem;

return (

    <div className='checkout-item'>
        <div className="image-container">
            <img alt='item' src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps=dispatch=>({
    clearItem: item=>dispatch(removeItemFromCart(item)),
    //pasar clearItem a este functionalComponent y agregarlo en el onclick de 
    //remove-button
    addItem: item=>dispatch(addItem(item)),
    removeItem: item=>dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);//importar en Checkout page
