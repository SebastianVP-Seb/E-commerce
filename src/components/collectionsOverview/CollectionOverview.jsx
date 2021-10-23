import React from 'react';

import '../../css/style.css';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/PreviewCollection';

// import { selectCollections } from '../../redux/shop/shopSelectors'; Cuando se tenía SHOP_DATA como arreglo

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';


const CollectionOverview=({collections})=>(
    <div className='collections-overview'>
         {
            collections.map(({id, ...otherCollectionProps})=>(
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps=createStructuredSelector({
    // collections: selectCollections //para cuando SHOP_DATA era un arreglo
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
//importar en ShopComponent
