/*
Para la conversión de los archivos scss a css:

npm i node-sass --save-dev

    "compile:sass": "node-sass src/sass/main.scss src/css/style.css",


    En el package.json -> en scripts -> 
        "node/sass ubicación/archivo/de/entrada(el scss) ubicación/archivo/de/salida(el css)"

Dentro de los componentes se puede escribir style={{ código css }}

Dentro de Directory -> agregar la propiedad size: large a las imágenes de womans y mens

// Para el hover de la imagen 
      position: absolute; -> dice que sin importar los demás elementos posicionados en la pág, el 
      posicionamiento de este item, siempre será el especificado (.content)

//Routing
    Cuando los archivos se envían del servidor, éstos sólo se envían una vez, luego se renderiza, 
    sólo manipulando el DOM. Ahora los servidores sólo se enfocan en enviar datos en vez de pedir
    las diferentes págs al repositorio de la app.

    React Router DOM
        yarn add react-router-dom

    En caso de conflicto con versiones de babel:
        En el package.json:
            "resolutions": {
                "babel-jest": "24.7.1" -> la versión que pida
            }

        En terminal: 
            yarn
            yarn start

    Importar en index.js:
        import {BrowserRouter} from 'react-router-dom';

    Debe envolver a los componentes: 
        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            document.getElementById('root')
        );

    En App.js se importa:
        import { Route } from 'react-router-dom';

    Se manda a llamar en el return, como si fuera un componente:
    Y recibe tres argumentos:
        exact: recibe true o false. El path tiene que ser exacto para mostrar el componente indicado
            Si solo se deja indicado: tomará el valor de true
        path: string de la pág
        component: componente que se quiere renderizar
            <Route exact path='/' component={hats} />

    Importar:
        import { Route, Switch } from 'react-router-dom';
        Switch envuelve a los Route:
        <Switch>
            <Route .../>
        </Switch>
        Cuando encuentra un match con el path: no renderiza nada más (para llevar un orden)

    Todo componente que es renderizado con Route, pasa tres argumentos. Viendo en props, son:
        history: contiene el push

        location: nos dice dónde estamos actualmente en la app. Dentro tiene un propiedad llamada
            pathname -> indica el path exacto de dónde estamos ubicados. Es de ! para algunos
            componentes saber la URL de donde se encuentra el usuario

        match: contiene el url con el que hizo match, contiene el path del route, inExact, es
            verdadero sólo si toda la URL cumple con lo indicado: se muestra la pág
        parámetros de la URL: path='/topics/:topicId' -> :topicId -> valor que cambia dinámicamente
        Al visitar esa pág y abrir los URLparams: se observa que topicId: tiene un valor, cuando en la
        URL se le pasa el parámetro: /topics/13 -> el valor es 13 y podría mostrarse en el render
        (recibiendo los props) <h1>{props.march.params.topicId} -> también se puede usar para el
        backend.

    Forma 1 de navegar Dinámicamente en el DOM entre págs: Usando Link
        Utilizando e importando el Link -> Link para navegar dinámicante entre págs
            import { Route, Link } from 'react-router-dom';
            return (
                <div>
                    <Link to='/Page1'>Ir a Topics</Link>
                    <h1>HomePage</h1>
                </div>

    Forma 2 de navegar dinámicamente en el DOM entre págs: Usando History
        Utiliza una función.
            <button onClick={()=>props.history.push('/About')}>Ir a About Me</button>
            A push se le pasa el string de a dónde queremos ir
            
    En cualquiera de estas formas, React sólo renderiza la pág, ésta no se vuelve a cargar, sólo se
    carga una vez: cuando se abre el sitio por 1ra vez

    //Práctica no recomendada, ya que el history viaja a través de varios componentes donde
    no se necesita, sino hasta llegar al final componente que lo ocupará
    Sólo se tiene acceso a éstas 3 propiedades a través del componente padre, no de los hijos 
    de éste. Pasar el history del HomePage hacia Directory y de éste a MenuItem (pasar el history
        como props)

    La solución es importar: 
        import { withRouter } from 'react-router';
    En el componente donde se va a usar el history.
    withRouter es un higher order component:
        A higher-order component (HOC) is an advanced technique in React for reusing component 
        logic. HOCs are not part of the React API, per se. They are a pattern that emerges from 
        React’s compositional nature.
        Concretely, a higher-order component is a function that takes a component and returns a 
        new component.
            const EnhancedComponent = higherOrderComponent(WrappedComponent);
        Toma al componente como un argumento y retorna un componente modificado

        Se hará con el componente MenuItem:
            export default withRouter(MenuItem);

        Lo regresará con el mismo nombre. Regresará un superPoweredComponent ahora con acceso a
        las 3 propiedades que se pasan con Route(history, location y match) -> props
        Y ya se puede poner history en los props de MenuItem -> se quiere envolver todo el div de
        MenuItem para estar atento al click de la nueva sección (con un on click):
            <div className={`${size} menu-item`} onClick={()=>history.push()}>
        Para esto se usará el parámetro del directorio: linkUrl: 'shop/hats', de esta manera, 
        podrá cambiar la URL y el componente lo reconocerá automáticamente:
            "/someMatchedURL/linkURL" -> sólo debe saber donde hacer match y luego agregará la URL


//SHOP PAGE
Crear el componente Shop. Importar en App.js
En su propio archivo poner el arreglo (db) de la pàg shop, porque va a ser estàtico (shop.data.js) 
importarlo en shop.js

//Preview collection component -> recorre a shop.data
Construido como un functional component

.filter((item,index)=>index<4)  ->  Para que sòlo muestre 4 items


//Crear Collection Item en Components


//Header, Header Component
El logo llevarà al Home, se importa en App, y se manda a llamar este componente afuera del
switch para que sea lo que renderice React siempre estè presente el Header:
Para importar el SVG:

        import { ReactComponent as Logo } from '../../assets/crown.svg';

This is a new special syntax when importing SVG in React. The ReactComponent import name is
special and tells Create React App that you want a React component that renders an SVG, 
rather than its filename.

//Para hacer los componentes de sign-in y sign-up
C/u de estos componentes tendrà su propio state -> sign in y register

//Crear carpeta en pages: sign-in-and-sign-up

Se usa Class Component cuando se quiere almacenar alguna info (state)

Para los inputs se establece el onChange

//Custom Button
El input y el button, ambos pueden tomar la propiedad de type='submit', así que los dos pueden
enviar el formulario.

El FrontEnd consiste en lo que el usuario ve y con lo que interactúa.
El BackEnd consiste en lo que el usuario no ve: autenticación, base de datos y servidor (almacenará
    el código para solicitar los datos de la db). La utenticación es como el usuario accede

=======================================================================================
                            FireBase
=======================================================================================
Iniciar sesión en Google
Ir a https://firebase.google.com
Crear un nuevo proyecto -> Click en Ir a la consola
Click en Agregar Proyecto
"Comienza por agregar FireBase en tu App".
Copiar sólo:
    const firebaseConfig = {
        apiKey: "AIzaSyD2mSQJfV4A2eQwiMGOJmhCs558_6saRHw",
        authDomain: "you-should-see-me-in-the-crown.firebaseapp.com",
        projectId: "you-should-see-me-in-the-crown",
        storageBucket: "you-should-see-me-in-the-crown.appspot.com",
        messagingSenderId: "833285413123",
        appId: "1:833285413123:web:e6fa096a8c0a2f54abb136",
        measurementId: "G-3C7HDFYWBC"
    };
(Sólo el objeto)

        If you are using a version of firebase that's greater than v8, you will encounter the 
        import error

        Attempted import error: 'firebase/app' does not contain a default export (imported as 
        'firebase').

        The same will be true for other firebase imports that we use in this project!

        There is an easy fix for this though, firebase includes backward compatibility. All you 
        need to is change your import from firebase/app to firebase/compat/app. The same is true 
        for all our other imports.

        So from:

        import firebase from 'firebase/app';
        import 'firebase/firestore';
        import 'firebase/auth';
        to:

        import firebase from 'firebase/compat/app';
        import 'firebase/compat/firestore';
        import 'firebase/compat/auth';


yarn add firebase

Crear nuevo folder llamado firebase en src -> firebase.utils.js

Ir a la interfaz de FireBase -> authentication -> google -> enable -> guardar
Ahora ya podemos usar Google (aparece habilitado)

Ir a SignIn.jsx -> 

Importar auth en App.js y cambiar la f principal de functionalComponent a classComponent porque
queremos almacenar el state del usuario (la info del usuario), para pasarla entre los
componentes.
Usualmente se hacen las peticiones fetch en el método componentDidMount().
No queremos que la app vuelva a cargar, queremos informarle a la App cuando Firebase
hago un cambio (añade o saque a un usuario), se utiliza: auth.onAuthStateChanged y es una f que
como parámetro toma lo que está en el state.
//Cómo la app se enterará de los cambios en Firebase, con: 
            unsubscribeFromAuth
            componentDidMount()
            componentWillUnmount()

            CSS box-sizing Property-----------------
content-box	Default. The width and height properties (and min/max properties) includes only 
    the content. Border and padding are not included
border-box	The width and height properties (and min/max properties) includes content, 
    padding and border

////Sign out
auth manda a llamar a sign out -> auth.signOut()
Cuando el usuario está dentro: el botón dice sign out y cuando está fuera: sign in.
Avisarle al header cuando un usuario está dentro o fuera
      <Header currentUser={this.state.currentUser} />
importar auth en header

En el customButton -> condicionar el regreso de una clase, para el botón, basada en un prop:
    const CustomButton=({children, isGoogleSignIn, ...otherProps})=>(
Para esto se hace stringInterpolation
    <button className={`${isGoogleSignIn ? 'isGoogleSignIn' : '' } 'custom-button'`} {...otherProps}>

//Base de datos:
Hay dos tipos de datos dentro de esta:
    Collections: grupo de objetos  y éstos objs son el segundo tipo de dato, llamado Documents
    Dentro de los docs se pueden agregar colecciones

//Ahora: guardar los usuarios autenticados dentro de la db
Del objeto que se obtiene cuando un usuario es autenticado nos importará:
displayName, email, phone, uid -> este lo da GoogleSign in, aunque se use inicio de sesión por correo
Estas propiedades se pondrán en la base de datos.
En el archivo firebase.utils.js crear la f createUserProfileDocument, la cual nos permitirá traer
las propiedades que queremos del objeto y será una f asíncrona porque se hará una API request.
 Esto se observa en App.js -> console.log(user);
Utilizando los objs que regresa Firestore (references and snapshots) podremos saber si hay datos
en la consulta que hemos hecho. Éstos, Firestore siempre los regresa (haya o no datos)
La referencia representa el lugar actual en la db al que se le está haciendo el query:
        firestore.doc('users/:userId')
Esta referencia no da los datos, sólo el posicionamiento, pero da el método Snapshot que trae
los datos que estamos buscando.

DocumentReference se usa para acceder a los métodos de CRUD (set, get, update, delete).
En el snapShot se observa: 
_firestore: Firestore {_delegate: xc, _
exists: (...) -> si existe
id: (...)
metadata: (...)
ref: (...)

//El snapShot es sólo para saber si hay datos, documentRef es para los métodos (crear)
console.log(snapShot);//se observa el id, con snapShop.data se observan las demás props,
          //pero no el id
          // console.log(snapShot.data());

//Sign-up component
Será ClassComponent porque se necesita guardar lo que el usuario escriba
Activar en Firebase la autenticación por email and password

//En sign-in
importar el método auth, para iniciar sesión con email and password. El método de auth es:
signInWithEmailAndPassword


===========================================================
            R E D U X
===========================================================
Librería que ofrece una forma sencilla de manejar el state. Maneja propiedades que son pasadas
a los componentes que las requieren (sólo donde se necesitan). Los componentes pueden acceder 
al gran state
Todos los states de los componentes se juntan en uno solo, formando un gran obj.
Redux es útil para:
    Manejar state grandes
    Compartiendo datos entre componentes
Principios de Redux:
    Un gran obj que será el state
    Este state es sólo para leer, no para modificarlo directamente, se crea uno nuevo
    Los cambios sólo pueden ser realizados a través de funciones puras (recibe un input y devuleve
        un output)

Reducer: f pura, que, recibe una acción (input) y crea un output y éste es el state o 
almacenamiento (todo el state de la app) y actualiza el DOM.
Todas las acciones pasarán por el reducer, yendo al storage (que es como ahora debe lucir la app)
y actualiza así la vista.

Un reducer es una f, y el storage del reducer son una colección de objs, en función de lo que 
c/reducer usará.

Las acciones son objetos con type:string y payload -> valor
El componente dispara la acción -> va al reducer y éste checa el type para si ver si se aplica
el reducer. Sólo se aplicará este reducer, no los otros. El reducer es similar a setState.

Diagrama de un reducer: Toma el actualState y toma una acción
El state es el stateActual, que después disparará una acción. La acción actualizará el currentState
Esta f retornará un obj (el nuevo state de userReducer). Siempre se regresa un obj porque se
quiere re-renderizar
        const userReducer=(state, action) => {
            switch(action.type) {
                case 'SET_CURRENT_USER':
                    return {
                        ...state,
                        currentUser: action.payload
                    };
                default: 
                    return state;
            }
        }; //=> currentUser: {...}

yarn add redux redux-logger react-redux

Trabajar en archivo index.js

import {Provider} from 'react-redux'; -> envolverá toda la app, así será un elemento padre y podremos
acceder a sus propiedades.

Crear el almacenamiento: crear carpeta redux dentro de src -> root-reducer.js : es el state de toda 
la app (combinación de todos los states).

1.- Se crea el reducer
2.- se importa en root-reducer
3.- se crea e instancía el almacenamiento -> store.js
El middleware está entre las acciones y el root-reducer. Es una f que recibe acciones, hace algo
con ellas y se las pasa al root-reducer.
4.- Crear la acción dentro de la carpeta user en redux (f que regresan objs, tomará un parámetro)
5.- Conectar el almacenamiento con los componentes:
        The connect() function connects a React component to a Redux store.
    Importar:
        import {connect} from 'react-redux'; En los componentes
        connect es un higher order component que permite modificar el componente para poder 
        acceder a propiedades de Redux (toman f como argumentos y regresa un nuevo componente)
6.- Cambiar la exportación del componente usando connect

Una vez modificado el componente Header (ya recibe la actualización de root-reducer), hay que
actualizar App.js
Importar: 
        import {connect} from 'react-redux';
        Cambiar la exportación: 
        export default connect()(App);

Se puede observar Redux-Loger en la consola, esto indica el state del redux, después de que una
acción es disparada:
        prevState: state antes de la acción
        action: la acción -> aquí se observa el type de userAction type: 'SET_CURRENT_USER',
            el payload es el gran obj de un usuario registrado en Firebase (porque se ha 
                presionado signin, si se presiona signout traerá un null)
        nextState: state luego de la modificación que provocó la acción en los reducers


Evitar que, una vez que el usuario ha iniciado sesión, éste siga viendo la sección de
sign in. 
Importar Redirect en App.js:
    import { Route, Switch, Redirect } from 'react-router-dom';
Luego, se requiere el currentUser del ReduxState.
Crear la f mapStateToProps

Práctica recomendada: asegurarnos de que el string que estamos usando en userAction sea consistente
donde sea que se utilice (ej, en el userReducer): (para evitar malas escrituras)
Dentro de la carpeta user -> archivo -> user.types.js. Importarlo donde se requiera (userReducer
    y en userAction)

///////////////////////////// K A R T
Para importar la imagen svg como ícono:, en Cart
import {ReactComponent as IconCart} from '../assets/icono-cart.svg';

///////// C A R T  D R O P  D O W N
Para mostrar el menú desplegable, validar si una condición es falsa o verdadera, crear un 
car reducer para guardar el valor de una propiedad.
Dentro de la carpeta redux
Cada carpeta reducer tendrá:
    nombre-reducer.js -> state inicial ; el reducer lleva el inicial y la acción ; switch
        preguntando por la acción
    nombre-actions.js -> f preguntando por el type
    nombre-types.js -> obj con el valor por el que se preguntará en el switch
Luego, importar connect y la acción en el componente donde se vaya a usar la acción (nombre-actions.js)
En el componente Cart se disparará la acción.
Agregar el cartReducer al root-reducer.js.
Luego, importar en el Header.jsx en mapStateToProps
===================================
Como se pasa el mapState y el mapDispatch
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

Para agregar items al carrito:
    modificar el custom Buttom para que devuelva un estilo en función de es true o false, similar
        Google signin: Dentro de className: ${isInverted ? 'inverted' : ''}
        Agregar esta clase en los estilos
        Después, donde se mande a llamar el CustomButton se le pasa ese valor (prop, isInverted)
Hacer que el botón de agregar al carrito, agregue el item al carro (en el store del redux)
Agregar esa propiedad a cartReducer (cartItems)
Definir las acciones de Agregar y Quitar items del carrito en cart.types.js -> Usarlas en el Reducer
Agregar un nuevo case.
Luego agregar la acción en el cartActions (addItem) y llevarlo al componente collectionItem

===================================
Las acciones pueden tener un type value y un payload value, éste último es lo que nosotros queramos
Donde se va a usar algo del Redux, se importa connect, entonces crear mapDispatchToProps
porque se necesita enviar este nuevo item.

////////////////////////////////////////
Agregando los items al carrito (vista)
Crear en Components: cart-item

////////////////////////
Reduce:
    Método en arreglos:
    Recibe dos argumentos, primero una función, esta f recibe dos parámetros: 
    acumulador y valor actual;y luego el valor inicial
    array=[1,2,3,4,5];
    array.reduce((accumulator, currentValue)=>accumulator+currentValue,0)

    Resultado: 15
    0+1=1
    1+2=3
    3+3=6
    6+4=10
    10+5=15

///////////////////////
Para mostrar el valor total de los artículos en el ícono de la bolsa:
en el componente Cart:
crear mapStateToProps -> sirve para extraer datos y se manda a llamar c/vez que el store
state cambia, el 1er argumento es el state y el segundo es opcional (nuestrosProps)
El state es el state completo de Redux. Y retorna un obj con info que el componente necesita
Cuando un reducer se actualiza -> siempre se retorna un nuevo obj -> redux re hace el state global
-> mapStateToProps se manda a llamar porque se pasan nuevos props a los componentes, por lo tanto
siempre se está re-renderizando el componente

//////////////////////
Memoization y caching -> memorización y almacenamiento en caché
caching: almacenar datos para usarlos después
memoization es una manera de recordar una solución para resolver un probleme (no es necesario
    volver a calcular)

if(1 in arrayNumeros) { -> verifica si 1 existe en ese obj
    
}

////////////////////////////
Añadir reselect: se usa para evitar que el componente Cart se re-renderice c/vez que el global
    state cambie. Mostrado aquí en línea 448
    yarn add reselect
Mover el código de mapStateToProps (de cart-icon-component) dentro de su propio folder y archivo

Crear cartSelectors.js

Hay dos tipos de selectores:   
    1) input-selector: no usa la librería selector -> f que toma todo el state y regresa una parte
     de él. Toma el reducerState.
     El segundo selector se crea a partir del primero, éste se nombra con la propiedad que tiene
     el primer selector y toma dos argumentos: el 1ro es una colección (arreglo) de input-selectors,
     el 2do es una f que retornará el valor que queremos de esa colección

    2) output-selector: usa input-selector y createSelector

Crear userSelector.js dentro de la carpeta user en Redux, usando currentUser, de Header

Dentro del archivo cartSelector, hacerlo también para hidden

Importar: {createStructuredSelector} en Header component

sustituir en Header component en mapStateToProps, por todo el state

Revisar en qué otros archivos se usa mapStateToProps.
App.js -> importar selectCurrentUser

//////////////////////////
Pág Go to checkout
Condicionar el mensaje de Cart empty dependiendo si hay artículos o no en el carrito
En el componente CartDropDown
"==" -> Revisa si el valor de dos cosas es el mismo
"===" -> Evaluación estricta: revisa el valor y el tipo de dato
0==false -> true
"1"==1 -> true
"1"===1 -> false: string es diferente de número

/////////
Valores que se consideran falsos en JS
0
NaN
null
undefined
false
""


//////////////////////////////
Crear nuevo selector para el precio, dentro de cartSelector

///////////////////
Connect pasa dispatch dentro del componente como un prop si no se le pasa un segundo
argumento a connect

//////////////////////
Combiene tener la imagen dentro de un contenedor (es más fácil controlar sus medidas)

====================================
Window.sessionStorage
    Los datos se borran cuando la ventana se cierra (sesión cerrada)
    Cuando se actualiza la pág, aún se tiene acceso a los datos
    myStorage = window.sessionStorage;

Window.localStorage
    Los datos persisten aunque la ventana se haya cerrado (sesión terminada)
    O cuando se actualiza la pág
    myStorage = window.localStorage;
Tiene setItem y getItem, a través de key, sólo se pueden almacenar strings
    Se define el obj para guardar el local storage
const paraGuardar={nombre: 'Sebastian'}
    Se convierte a astring, el key es: miObjeto
window.localStorage.setItem('miObjeto',JSON.stringify(paraGuardar))
    Para acceder a él, se le pasa el key
window.localStorage.getItem('miObjeto')
    Para hacer el string a object
const aObjeto=window.localStorage.getItem('miObjeto')
JSON.parse('miObjeto')

El reducerState es un json object
Los reducers son f que retornan objectState

/////////////////////////////
Obtener la librería:
    yarn add redux-persist
Permite manejar session y local Storage
Ir a storage.js ->importar->import {persistStore} from 'redux-persist';

Importar en rootReducer: import {persistReducer} from 'redux-persist';
importar el local storage: import storage from 'redux-persist/lib/storage'

importar en index.js:
    import {PersistGate} from 'redux-persist/integration/react';


/////////////////////////////
Mover el directorio de los datos al redux store, para que ahí se pueda
guardar
Crear folder directory en carpeta redux

Mover shop.data dentro de su propio reducer: Crear folder shop en carpeta
reducer.
Mover el archivo shop.data.js dentro del folder apenas creado

==============================
Crear folder collectionsOverview dentro de components
Es donde irán los demás productos de la tienda

Crear folder category dentro de la carpeta pages
Se cambio el nombre de category a Collection


========================================
El 1er parámetro de mapStateToProps es el state (todo el state de los reducers)
El 2do se llama ownProps: props del componente que se envuelven en el connect

=======================================
yarn add lodash.memoize
//Para que la función tenga memoria y al volver a llamar la misma colección: ya no retorne la función, 
//sino lo que tiene guardado en la memoria

=======================================
Currying
Se tiene una f que contiene múltiples parámetros, curryin la toma y hace una f que sólo toma un parámetro 
a la vez

const multiply=(a,b)=>a*b;
multiply(4,3);
R=12
            usando Curryin:
const curriedMultiply=(a)=>(b)=>a*b;
curriedMultiply(5)(7);
R=35

Utilidad: se pueden crear múltiples utils functions:
const curriedMultiplyBy6=curriedMultiply(6);
Esta f recordará las funciones pasadas, aquí queremos multiplicar lo que sea por 6 (xp guarda el argumento de 6)
curriedMultiplyBy6(4);
R=24;  Yse puede llamar las veces que sea:
curriedMultiplyBy6(6); =36
curriedMultiplyBy6(7); =42
curriedMultiplyBy6(3); =18 ; De esta forma, sólo la f curriedMultiply se ejecuta una vez


// =============================================================
Para almacenar las colecciones: el problema con .find, es que éste método recorre el arreglo de izq a der hasta que
encuentra true. Si se tuviera un arreglo de miles de colecciones, tardaría mucho hasta llegar a los últimos datos, 
suponiendo que el usuario quiere los últimos.
La sol es guardar las colecciones en un objeto.
A esto se le llama: Data Normalization:
    Convertir SHOP_DATA de arreglo a obj -> Actualizar ShopSelector

Ahora los demás componentes siguen pensando que SHOP_DATA se trata de un arreglo, por lo tanto, crear un nuevo
selector para convertir este obj a un arreglo, en shopSelector: (selectCollectionsForPreview)

Ej: Con la f Object.keys -> regresa en un arreglo las llaves del obj:
    const testObject={a:1, b:2, c:3};
    Object.keys(testObjec) -> ['a', 'b', 'c']

    Si se usa: Object.values(testObject) -> [1,2,3]

// =============================================================
Stripe, plataforma para manejar pagos en internet

yarn add react-stripe-checkout
Así se obtiene acceso al btn de Stripe -> crear nuevo componente -> folder stripe-button

// =============================================================
Para ver las propiedades qu puede recibir el btn:
https://github.com/azmenak/react-stripe-checkout

// =============================================================
Poniendo favicon: index.html (en carpeta public) -> cambiar la etiqueta title -> reemplazar el favicon (dentro
    de la carpeta public)












*/