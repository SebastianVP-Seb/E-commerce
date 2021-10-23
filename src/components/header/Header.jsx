import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import '../../css/style.css';

import {connect} from 'react-redux';//para que este componente tome el valor de currentUser del reducer

import CartIcon from '../cart/Cart';
import CartDropDown from '../cart-dropdown/CartDropDown';

import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';

const Header=({currentUser, hidden})=>(

    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link to='/shop' className="option">
                Shop
            </Link>
            <Link to='/contact' className="option">
                Contact
            </Link>
            {/* Para el btn sign in y sign out  */}
            {
                currentUser ? 
                (<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>

        {/* Para desplegar el Menú del carrito de compras  */}
        { hidden ? null : <CartDropDown />}
    </div>
);

//f para connect, permite acceder al state
//toma el state de root-reducer
//Aquí se extraen los valores por defecto del reducer, del state, así como se puso en el root
// //extrayendo valores anhidados. Pasarlos como props en la functionComponent
// const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>({
//     // En root-reducer: 
//     // user: userReducer
//     //nombre y valor, se toman de root-reducer
//     // currentUser: state.user.currentUser
//     currentUser,
//     hidden
// });

// const mapStateToProps=(state)=>({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

//usando createStructuredSelector:
const mapStateToProps=createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// export default Header;
export default connect(mapStateToProps)(Header);
