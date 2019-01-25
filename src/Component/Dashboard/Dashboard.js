import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            inventoryList:[]
        }
    }

  render() {
      
    return (
      <div className="App">
        Dashboard
        <Product displayProducts={this.props.displayProducts}/>
      </div>
    );
  }
}

export default Dashboard;