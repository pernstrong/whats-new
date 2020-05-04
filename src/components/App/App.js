import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    console.log(this.state.local)
    return (
      <div className="app">
        <Menu /> 
        <NewsContainer local={this.state.local} />
      </div>
    );
  }
}

export default App;
