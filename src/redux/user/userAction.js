// 4.- Crear la acción dentro de la carpeta user en redux (f que regresan objs, tomará un parámetro)
// El usuario de firebase

import UserActionTypes from "./user.types";

const setCurrentUser=user=>({
    // type: 'SET_CURRENT_USER',
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export default setCurrentUser;