import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2mSQJfV4A2eQwiMGOJmhCs558_6saRHw",
    authDomain: "you-should-see-me-in-the-crown.firebaseapp.com",
    projectId: "you-should-see-me-in-the-crown",
    storageBucket: "you-should-see-me-in-the-crown.appspot.com",
    messagingSenderId: "833285413123",
    appId: "1:833285413123:web:e6fa096a8c0a2f54abb136",
    measurementId: "G-3C7HDFYWBC"
};

// f para guardar los datos del usuario en la db.
//Tomará el obj del usuario atenticado y lo guardará en la db
// Será asíncrona porque se hará un API request 
//userAuth es de la librería
// user._delegate
export const createUserProfileDocument=async (userAuth, additionalData) => {
    if(!userAuth) return; //Si no hay usuario, no hagas nada más

    //Si existe...
    // const userRef=firestore.doc('users/1234567'); Fake 
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    // Se manda a llamar la ref y se toma un snapShot y usando éste ùltimo sabremos si hay datos o no
    // console.log(firestore.doc('users/1234567')); //El obj se imprime en consola aunque no exista en la db
    console.log(snapShot);
    //Comprobar si hay usuario:
    if(!snapShot.exists) {
        //El snapShot es sólo para saber si hay datos, documentRef es para los métodos (crear)
        const {displayName, email}=userAuth;
        const creadoEn=new Date(); //nos dirá cuándo fue creado el usuario

        try {
            await userRef.set({
                displayName,
                email,
                creadoEn,
                ...additionalData
            })
            
        } catch (error) {
            console.log('Error al crear al usuario', error.message);
        }

    }
    return userRef;//para usar esta info en otras partes del código
};


firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

//Para Google
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); //permite desplegar el pop up de 
//Google para iniciar sesión
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

const provider1=new firebase.auth.FacebookAuthProvider();
provider1.setCustomParameters({propmp:'select_account'});
export const signInWithFb=()=>auth.signInWithPopup(provider1);

export default firebase;