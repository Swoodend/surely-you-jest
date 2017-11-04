import React, { Component } from 'react';
import logo from './logo.svg';
import ContactList from './ContactList';
import ContactSearch from './ContactSearch';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ContactList
            contacts={[
                {name:"alice", number:"111-111-1111"}, 
                {name:"bob", number: "222-222-2222"},
                {name:"carol", number:"333-333-3333"},
                {name: "devon", number:"444-444-4444"}
            ]}
        >
        </ContactList>
      </div>
    );
  }
}

export default App;
