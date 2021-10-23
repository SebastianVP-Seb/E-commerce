import React, { Component } from 'react';

import '../../css/style.css';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {auth, signInWithFb, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    //Métodos
    handleSubmit=async e=>{
        e.preventDefault();
        const {email, password}=this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Se limpia el state 
            this.setState({email:'',password:''});
        } catch (error) {
            console.log(error);
        }
    }

    handleChange=e=>{
        const {value, name}=e.target;
        this.setState({[name]:value});//Aplica para email y password
    }

    render(){

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        // onChange={this.handleChange} 
                        handleChange={this.handleChange} //Lo que viene de los props de FormInput
                        //el onChange se renombró en FormInput: onChange={handleChange}
                        type="email" 
                        required 
                        name='email' 
                        value={this.state.email} 
                        label='Email' />

                    {/* <label name='email'>Email</label> */}

                    <FormInput 
                        // onChange={this.handleChange} 
                        handleChange={this.handleChange} //Lo que viene de los props de FormInput
                        //el onChange se renombró en FormInput: onChange={handleChange}
                        type="password" 
                        required 
                        name='password' 
                        value={this.state.password} 
                        label='Password' />

                    {/* <label name='password'>Password</label> */}

                    <div className='buttons'> 
                        <CustomButton type="submit" className='custom-button'>
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithFb} isFacebookSignIn>
                            Sign In with Facebook
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;