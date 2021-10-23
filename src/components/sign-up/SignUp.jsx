import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import '../../css/style.css';

class SignUp extends Component {
    constructor() {
        super();

        //state
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    };

    //métodos y funciones
    handleSubmit=async(e)=>{
        e.preventDefault();

        const {displayName, email, password, confirmPassword}=this.state;

        if(password!==confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            //Método de Firebase (de auth library) (createUserWithEmailAndPassword)
            const {user}=await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            //Para limpiar el formulario
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
            
        } catch (error) {

            const errorCode = error.code;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            }else {
                console.log(error);
            }
        }
    };

    handleChange=(e)=>{
        const {name, value}=e.target;
        this.setState({[name]:value})
        console.log(value);
    };


    render() {
        //Extraer los valores del state
        const {displayName, email, password, confirmPassword}=this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign uo with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                        />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    };
};

export default SignUp;
