import React, { Component } from 'react';

// import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      imageUrl:'',
      productName:'',
      price: null
    }
  }
enterImage(){
  axios.get()
}
submit(){
  const porductInput = {
    porductInput:this.state
  }
  axios.put(`api/product`,)
}
updateImage(text){
  this.setState({
    imageUrl:text
  })
}
updateName(text){
  this.setState({
    productName:text
  })
}
updatePrice(val){
  this.setState({
    price:val
  })
}
cancel(){
  this.setState({
    imageURL:'',
    productName:'',
    price: null
  })
}
  render() {
    return (
      <div className="App">
        {/* <Dashboard /> */}
        <Form imageUrl={this.updateImage} userInputImage={this.state.imageUrl} productName={this.updateName} userInputName={this.state.productName} price={this.updatePrice} userInputPrice={this.state.price} cancel={this.cancel}/>
        <Header />
      </div>
    );
  }
}

export default App;
