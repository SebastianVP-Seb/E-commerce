import React from 'react';

import '../../css/style.css';

const CustomButton=({children, isGoogleSignIn, isFacebookSignIn, isInverted, ...otherProps})=>(

    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button
                        ${isFacebookSignIn ? 'facebook-sign-in' : ''}
                        ${isInverted ? 'isInverted' : ''} `}
                        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

/*Se pasan los children de los props, el submit viaja en ...otherPrps*/