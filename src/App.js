import React, { Component } from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';

import Header from './components/header/Header';
import SignInYSignUp from './pages/sign-in-and-sign-up/SignInYSignUp';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';

import setCurrentUser from './redux/user/userAction';

import {selectCurrentUser} from './redux/user/userSelector';
import {createStructuredSelector} from 'reselect';

import Checkout from './pages/checkout/Checkout';


// Representando una pág 
// const hats=()=>( //Debe llevar (), no {}
//   <div>
//     <h1>Página de sombreros</h1>
//   </div>
// )

class App extends Component {

  // constructor() { //Ya no es necesario porque se usa Redux y la f connect, setState es 
  //                     //reemplazado por setCurrentUser Action
  //   super();

  //   this.state={
  //     currentUser: null
  //   }
  // }

  //Métodos

  //Cómo la app se enterará de los cambios en Firebase
  unsubscribeFromAuth=null;//para hacer sign out

  componentDidMount() {//open subscription (cuando un usuario se registra)

    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async (userAuth)=>{
      // this.setState({currentUser: user});
      // createUserProfileDocument(user);

      if(userAuth) {//si existe
        const userRef=await createUserProfileDocument(userAuth);
        //traerá una captura para ver lo que está almacenado en la db
        userRef.onSnapshot(snapShot=>{
          //aquí tomaremos los datos del usuario y si hay nueva atenticación. Permite verificar si un
          // doc existe con exists y obtener las props del obj utilizando .data. Si ya está en la db
          // console.log(snapShot);//se observa el id, con snapShop.data se observan las demás props,
          //pero no el id. Utilizando el setState para acceder al displayName, email y id
          // console.log(snapShot.data());

          // this.setState({ //es reemplazado por setCurrentUser
          //   currentUser: {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        // ), ()=>console.log(this.state)) //porque es una f asíncrona, ahora sí aparecen los datos
        });
      }
      //si el usuario ha salido -> regresa null:

      // else {
        // this.setState({currentUser: userAuth}); //es reemplazado por setCurrentUser 
        setCurrentUser(userAuth);
        //userAuth es de la librería
      // }

      // console.log(user);//se observan las propiedades de displayName y email
      // console.log(user._delegate.displayName);
      // console.log(user._delegate);
      // Cuando se hace sign out, en la consola regresa "null" 
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();//para la desuscripción
  }

  render(){

    
    return (
      
      <div>
        {/* Sin redux  */}
      {/* <Header currentUser={this.state.currentUser} /> */}
      {/* Con Redux  */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/shop/hats' component={hats} /> */}
        <Route path='/shop' component={Shop} />
        {/* <Route path='/signin' component={SignInYSignUp} /> */}
        <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInYSignUp />)} />

        <Route exact path='/checkout' component={Checkout}/>
      </Switch>
    </div>
    );
  }
}

// const mapStateToProps=({user})=>({
//   currentUser:user.currentUser
// });
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
  //dispatch indica que todo lo que se le pase será una acción y se la pasará a un reducer
  //el user de payload de userAction
}); //regresa un obj
// export default App;
// Ya no se necesita en App currentUser, porque el valor ya viene dado en root-reducer (userReducer)
//Se pasa null como 1er argumento
//Ahora se pasa la f mapStateToProps, para evitar que el usuario vea la pág de sign in si ya ha 
//iniciado sesión
export default connect(mapStateToProps, mapDispatchToProps)(App);

