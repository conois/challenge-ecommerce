import React, { Component } from 'react';
import Products from './products.js'; 

class App extends Component {
  render() {
    return (
      <div className="app">
        <Products/>
      </div>
    );
  }
}

export default App;