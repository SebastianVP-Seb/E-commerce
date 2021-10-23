import React, { Component } from 'react';

// import SHOP_DATA from './shop.data';//este se ha movido a su carpeta en Redux
import '../../css/style.css';

// import PreviewCollection from '../../components/preview-collection/PreviewCollection';

// import { selectCollections } from '../../redux/shop/shopSelectors';

// import {connect} from 'react-redux';
// import {createStructuredSelector} from 'reselect';

import CollectionOverview from '../../components/collectionsOverview/CollectionOverview';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/Collection';

//Los 3 objs son: match, history y location
//se tiene acceso a match porque en App.js, el componente Shop está dentro de
// un Route y así se puede acceder a ellos 
const Shop=({match})=>{

    console.log(match);
    //regresa: path: /shop y url: /shop
    //Se hará: shop/:category
    
    
        return (
    // class Shop extends Component {
    // constructor(props){
    //     super(props);

    //     this.state={
    //         collections: SHOP_DATA
    //     }
    // }

    //Métodos

    // render() {

        // const {collections}=this.state;

        // return (
            <div className='shop-page'>
                {/* {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                } */}
                <Route exact path={`${match.path}`} component={CollectionOverview} />

                {/* El route name será un parámetro dinámico para renderizar los items selecionados */}
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                {/* Permite acceder a categoryId como un parámetro en el Obj match 
                aparece categoryId en match params (en la consola)
                Este id es la ruta*/}
            </div>
        // )
    // }
)};

// const mapStateToProps=createStructuredSelector({
//     collections: selectCollections
// });

// export default connect(mapStateToProps)(Shop);
export default Shop;