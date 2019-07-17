import React from 'react';

import { Login } from './login';
import { Home } from './home';

import './App.css';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  onLogin = (isLoggedIn) => {
    this.setState({
      isLoggedIn: isLoggedIn
    })
  }

  render() {
    return (
      <div className="App">
        <LoginContext.Provider value={this.state.isLoggedIn}>
        {
          this.state.isLoggedIn === false &&
          <Login onLogin={this.onLogin} />
        }
        {
          this.state.isLoggedIn === true &&
          <Home />
        }
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;



const LoginContext = React.createContext(false);



export function IsLoggedIn(props) {
  return (
    <LoginContext.Consumer>
      {
        (isLoggedIn) => isLoggedIn && props.children
      }
    </LoginContext.Consumer>
  )
}