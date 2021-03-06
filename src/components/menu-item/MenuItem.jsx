import React from 'react';
import { withRouter } from 'react-router';

import '../../css/style.css';

const MenuItem=({title, imageUrl, size, history, linkUrl, match})=>{

    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>

            {/* Para el hover de la imagen */}
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />

                <div className='content'>
                    <h1 className='title'>
                        {title.toUpperCase()}
                    </h1>
                    <span className='sub-title'>
                        Shop now
                    </span>
                </div>
                
        </div>
    )
}

export default withRouter(MenuItem);