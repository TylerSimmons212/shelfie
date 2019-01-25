import React, { Component } from 'react';
import Product from './Product/Product';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        Dashboard
        <Product />
      </div>
    );
  }
}

export default Dashboard;