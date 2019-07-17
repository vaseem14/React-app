import React from 'react';

import { ImageBox } from './user.image';

import './user.header.css';

export function UserHeader(props){
    return (
        <div className="userHead" >
            <ImageBox imageUrl={props.user.avatar} />
            <div className="userHeadDetail" >
                <p>{props.user.first_name}</p>
                <p>{props.user.email}</p>
            </div>
        </div>
    )
}