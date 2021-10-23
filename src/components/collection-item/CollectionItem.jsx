import React from 'react';

import '../../css/style.css';

import CustomButton from '../custom-button/CustomButton';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

const CollectionItem=({item, addItem})=>{

    const {id,name,price,imageUrl}=item;

    return (

    <div className='collection-item'>

        <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        {/* isInverted aplica el estilo al botón  */}
        <CustomButton isInverted onClick={()=>addItem(item)}>Add to cart</CustomButton>
    </div>
)};

const mapDispatchToProps=(dispatch)=>({
    //recibe el item como una propiedad, lo pasa a la acción addItem (creada en cartActions) y entonces
    //dispatch lo envía al redux storage. Agregar addItem como prop al functionalComponent
    addItem: item=>dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);