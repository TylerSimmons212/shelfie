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
      let myInventory = this.state.inventoryList.map(()=>{
          return (
              <Product />
          )
      })
    return (
      <div className="App">
        Dashboard
        {myInventory}
      </div>
    );
  }
}

export default Dashboard;