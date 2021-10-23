import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {ReactComponent as crownsvg} from '../../assets/crown.svg';

const StripeCheckOutButton=({price})=>{//tomará el precio
    //Stripe requiere el precio multiplicado por 100 y la publishablekey que da en su plataforma
    const priceForSStripe=price*100;
    const publishablekey='pk_test_51JnZ9tDVdoDOYqXqUdUpIT94LyWw2ePVr2n3jSZcraHg0qa3qpq2irKwPd99HSsf3qPc0jtk2yBdXw9JpVPiPZ3i00yUobptpA';

    // El token es un success callback cuando se ace submit 

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
        label='Pay now'
        name='Crwn Clothing'
        billingAddress
        shippingAddress
        image={crownsvg}
        description={`Your total is $${price}`}
        amount={priceForSStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckOutButton;//imp en checkoutPage

