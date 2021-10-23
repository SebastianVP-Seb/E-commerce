import React, { Component } from 'react';

import MenuItem from '../menu-item/MenuItem';

import '../../css/style.css';

import {connect} from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import {createStructuredSelector} from 'reselect';

const Directory=({sections})=>{
// class Directory extends Component{

    // constructor(){ //Ya no se necesita que sea un classComponent, 
    //                 //al importar connect

    //     super();

    //     this.state={ 
    //         sections: [
    //             {
    //             title: 'hats',
    //             imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    //             id: 1,
    //             linkUrl: 'shop/hats'
    //             },
    //             {
    //             title: 'jackets',
    //             imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    //             id: 2,
    //             linkUrl: 'shop/jackets'
    //             },
    //             {
    //             title: 'sneakers',
    //             imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    //             id: 3,
    //             linkUrl: 'shop/sneakers'
    //             },
    //             {
    //             title: 'womens',
    //             imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    //             size: 'large',
    //             id: 4,
    //             linkUrl: 'shop/womens'
    //             },
    //             {
    //             title: 'mens',
    //             imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    //             size: 'large',
    //             id: 5,
    //             linkUrl: 'shop/mens'
    //             }
    //         ]
    //     }
    // }

    //Métodos

    // render(){

        return (
            <div className='directory-menu'>
                {/* Recorriendo el arreglo  */}
                {/* Con classComponent: */}
                {/* {this.state.sections.map(({title, imageUrl, id, size, linkUrl})=>( */}
                    {sections.map(({title, imageUrl, id, size, linkUrl})=>(

                /* {this.state.sections.map(({id, ...otherSectionProps})=>( */
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    // Ya que tienen el mismo nombre, se puede utilizar el operador spread 
                    // En el componente MenuItem se mandarían normal, como props 
                    // <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    // }
};

const mapStateToProps=createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);