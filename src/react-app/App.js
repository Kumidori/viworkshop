import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderList(users) {
    return (
      <ul class="users">
        {users.map((user) => <li class="users__item">{user.name}</li>)}
      </ul>
    )
  }
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Welcome to React</h1>
          {this.props.loading && <div className="logo"><img src={logo} className="logo__image" alt="unicorn logo" /></div>}
        </header>
        <div className="app__content">
          {this.props.users.length > 0 ? this.renderList(this.props.users) : null}
        </div>


      </div>
    );
  }
}

export default App;
