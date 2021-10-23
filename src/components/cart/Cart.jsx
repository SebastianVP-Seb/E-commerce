import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import '../../css/style.css';

//para reducer
//Aquí se disparará la acción
import { connect } from 'react-redux';
import toggleCartHidden from '../../redux/cart/cartActions';

import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import {createStructuredSelector} from 'reselect';


const CartIcon=({toggleCartHidden, itemCount})=>(

    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        {/* antes de mapStateToProps  */}
        {/* <span className='item-count'>0</span> */}
        <span className='item-count'>{itemCount}</span>

    </div>
);

//f para usar el reducer
//pasarle toggleCartHidden al functional component
const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});

//del state se extrae cart: (de root-reducer.js) por conveniencia se le llama state
//y luego del cart, se extrae cartItems (del cartReducer)
// const mapStateToProps=({cart:{cartItems}})=>({
//     itemCount: cartItems.reduce((accumulator, cartItem)=>accumulator+cartItem.quantity,0)
//     //ahora, itemCount se le pasa al componente como prop (al functional Component)
// });

//con la libreria select
//se le pasa todo el reducer state al selector
// const mapStateToProps=(state)=>({
//     itemCount: selectCartItemsCount(state)
// });

const mapStateToProps=createStructuredSelector({
    itemCount: selectCartItemsCount
});

// export default CartIcon;
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
