import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';//para local storage

import directoryReducer from "./directory/directoryReducer";

import shopReducer from "./shop/shopReducer";

//configuración del storage:
const persistConfig={
    key: 'root',
    storage,
    whitelist:['cart']//nombre en string de los reducers que va a almacenar
};

const rootReducer=combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);//importar en index.js

//'user' será el key -> Este bloque se usaba antes de usar la librería redux-persist
// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });

