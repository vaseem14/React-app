import React from 'react'

export function ImageBox (props){
    let style= {
        height: "50px",
        width: "50px",
        borderRadius:"50%"
    }

    return (
        <img src={props.imageUrl}  alt={props.userName} style={style} />
    )
}