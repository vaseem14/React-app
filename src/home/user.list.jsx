
import React from 'react'

import { ImageBox } from './user.image';

import './user.list.css';

export function UserList(props = {}){

    return (
        <ul className="userList">
            {
                props.userList.map((user) => {
                    return <User key={user.id} user={user} onClick={props.onSelectUser} />
                })
            }
        </ul>
    );
}


function User(props){
    return (
        <li className="usercontainer" onClick={() => props.onClick(props.user)}>
            <div className="image">
            <ImageBox imageUrl={props.user.avatar} />
            </div>
            <div className="userDetails">
                <div className="username">
                    {
                        props.user.first_name
                    }
                </div>
                <div className="useremail">
                    {
                        props.user.email
                    }
                </div>
            </div>
        </li>
    )

}