import React, { Component } from 'react';

class Form extends Component {

    updateImage(value){
        this.props.imageUrl(value)
    }
    updateName(value){
        this.props.productName(value)
    }
    updatePrice(value){
        this.props.price(value)
    }

  render(props) {
    return (
      <div className="App">
        <p>Image URL:</p>
        <input type="text" value={this.props.userInputImage} onChange={(e)=>this.updateImage(e.target.value)}/>
        <p>Product Name:</p>
        <input type="text" value={this.props.userInputName} onChange={(e)=>this.updateName(e.target.value)}/>
        <p>Price:</p>
        <input type="text" value={this.props.userInputPrice} onChange={(e)=>this.updatePrice(e.target.value)}/>
        <br/>
        <button onClick={this.props.cancel}>Cancel</button>
        <button onClick={this.props.submit}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;