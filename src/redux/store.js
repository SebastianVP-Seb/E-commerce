import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

import {persistStore} from 'redux-persist';

const middlewares=[logger];

const store=createStore(rootReducer, applyMiddleware(...middlewares));

export default store;//se importa en index.js y se le pasa al provider

export const persistor=persistStore(store);//importar en index.js