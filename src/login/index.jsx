import React from 'react';

import './login.css';

//login.jsx
export function Login(props = {}) {

    let email = "";
    let password = "";

    const login = () => {
        console.log("email password", email, password);
        fetch("https://reqres.in/api/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: password
            })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            alert("user logged in");
            props.onLogin(true);
        })
    }

    const getEmail = (evt) => {
        email = evt.target.value;
    }

    const getPassword = (evt) => {
        password = evt.target.value;
    }

    return (
        <div className="loginBox">
            <h1>Login form</h1>
            <EmailBox getEmail={getEmail}/>
            <Password getPassword={getPassword}/>
            <button className="" onClick={login}>Login</button>
        </div>
       
    );
}

function EmailBox(props) {
    return (<p>
        <label htmlFor="">Email</label><br/>
        <input type="email" name="email" onBlur={props.getEmail}/>
    </p>)
}


function Password(props) {
    return (<p>
        <label htmlFor="">Password</label><br/>
        <input type="password" name="password" onBlur={props.getPassword}/>
    </p>)
}

