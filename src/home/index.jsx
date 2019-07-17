import React from 'react';

import './home.css';

import { UserHeader } from './user.header';
import { UserList } from './user.list';
import { UserDetail } from './user.details';

import { IsLoggedIn } from '../App';


export class Home extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            selectedUser: {}
        }
    }

    selectUser = (user) => {
        this.setState({
            selectedUser: user
        })
    }

    getUser = () => {
        fetch("https://reqres.in/api/users?page=2")
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            this.setState({
                userList: res.data
            });
        })
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="me">
                        <UserHeader user={{}}/>
                    </div>
                    <div className="targetUser">
                        <UserHeader user={this.state.selectedUser}/>
                    </div>
                </div>
                <div className="contentBox">
                    <UserList userList={this.state.userList} onSelectUser={this.selectUser}/>
                    <div className="contentHolder">
                        <UserDetail user={this.state.selectedUser}/>  
                    </div>
                </div>
                <IsLoggedIn>
                    <button onClick={this.getUser}>getUser</button>
                </IsLoggedIn>
            </div>
        )
    }
}
