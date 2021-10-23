import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';

import '../../css/style.css';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import StripeCheckOutButton from '../../components/stripe/StripeCheckOutButton';

const Checkout=({cartItems, total})=>{
    console.log(total);

    return (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            ))
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
            <br />
            <StripeCheckOutButton price={total} />
        </div>
    </div>
)};

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});//agregar cartItems y total a este functional Component

export default connect(mapStateToProps)(Checkout);//importar en App.js y agregar un nuevo Route
