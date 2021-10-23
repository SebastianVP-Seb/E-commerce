import {createSelector} from 'reselect';

//Para que la función tenga memoria y al volver a llamar la misma colección: ya no retorne la función, 
//sino lo que tiene guardado en la memoria
import { memoize } from 'lodash';
// import memoize from 'lodash.memoize'; ???

const selectShop=state=>state.shop;

//Para que coincida el id de la db con el de la Url
///shop/hats -> aquí el id es "hats"
//este string será el valor dinámico
// const COLLECTION_ID_MAP={ Cuando se tenía SHOP_DATA como arreglo
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
);//importar en Shop component

export const selectCollectionsForPreview=createSelector(//Convertirá las llaves del obj a un arreglo
    //estas son: hats, womens...
    [selectCollections],//xq queremos el obj
    collections=>Object.keys(collections).map(key=>collections[key])//que el valor del arreglo sea la key
);//imp en CollectionOverview, como parámetro

//toma el parámetro de la Url (hats, mens...)
//find retorna el elemento que sea true
//Esta f busca hacer match con collection.id con el COLLECTION_ID_MAP
export const selectCollection=memoize(collectionUrlParam=>
    createSelector(
        [selectCollections],
        collections=>collections[collectionUrlParam]
//Ahora, como la db es un objeto, a las colecciones sólo se le pasa el parámetro de la Url que se quiere buscar
//Ya no es necesario hacer un método para recorrerlo
//Se debe especificar el id y su respectivo valor. Esto, el navegador lo hace internamente a través de un hashing que
//retorna instantáneamente el valor para el id que se le ha pasado


        // collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam]) -> Cuando se tenía un arreglo
    ));//Import en CollectionComponent