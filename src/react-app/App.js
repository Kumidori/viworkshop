import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
			{this.props.loading && <img src={logo} className="App-logo" alt="logo" />}
            {this.props.users.map((user) => <img src="" alt={user.name}/>)}
        </header>
      </div>
    );
  }
}

export default App;
