import React from 'react';

import '../../css/style.css';

import SignIn from '../../components/sign-in/SignIn';

import SignUp from '../../components/sign-up/SignUp';

const SignInYSignUp=()=>(

    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInYSignUp;
