import firebase from "@firebase/app-compat";
import 'firebase/firestore';

const firestore=firebase.firestore();

// Accede a la colección llamda users y luego al documento con el id indicado 
firestore.collection('users').doc('if0CqZBvcwnOVdkfDGuR').collection('cartItems').doc('E7JF384BZ775Dp2HQcEa');

// Para acceder sólo al último doc: 
firestore.doc('/users/if0CqZBvcwnOVdkfDGuR/cartItems/E7JF384BZ775Dp2HQcEa');

// Para accder a sólo la colección: 
firestore.collection('/users/if0CqZBvcwnOVdkfDGuR/cartItems');

