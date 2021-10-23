//El payload puede ser lo que sea y puede o no ser usado. 

//Este es el userReducer

import UserActionTypes from "./user.types";

//Valor por defecto: 
const INITIAL_STATE= {
    currentUser: null
}

const userReducer=(state=INITIAL_STATE, action)=> {
    switch (action.type) {
        // case 'SET_CURRENT_USER':
        case UserActionTypes.SET_CURRENT_USER:
            return { //nuevo state
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;