import React from 'react'
import "animate.css"
const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__animated animate__lightSpeedInRight">
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem
