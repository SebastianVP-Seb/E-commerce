import {createSelector} from 'reselect';

//se selecciona el state
const selectUser=state=>state.user;

// usando currentUser, de Header
export const selectCurrentUser=createSelector(//importar en Header component
    [selectUser],
    //toma el return del inputSelector (userReducer)
    (user)=>user.currentUser
);