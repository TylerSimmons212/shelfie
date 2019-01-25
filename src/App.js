import React, { Component } from 'react';

import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageUrl:'',
      productName:'',
      price: null,
    }
    this.updateImage=this.updateImage.bind(this)
    this.updateName=this.updateName.bind(this)
    this.updatePrice=this.updatePrice.bind(this)
    this.cancel=this.cancel.bind(this)
    this.submit=this.submit.bind(this)
  }

submit(){
  const productInput = {
    imageURL:this.state.imageUrl,
    productName:this.state.productName,
    price:this.state.price
  }
  axios.post(`api/product`,productInput)
  .then(response => {this.setState({products:response.data})})
}

updateImage(val){
this.setState({imageUrl:val})}

updateName(val){
this.setState({productName:val})}

updatePrice(val){this.setState({price:val})}

cancel(){
return this.setState({
    imageURL:'',
    productName:'',
    price: null
  })}

displayProducts(){
  axios.get('/api/product')
  .then(res => {console.log(res)})}

  render() {
    return (
      <div className="App">
      <Header />
        <Dashboard 
        displayProducts={this.displayProducts.res}/>
        <Form 
        imageUrl={this.updateImage} 
        userInputImage={this.state.imageUrl} 
        productName={this.updateName} 
        userInputName={this.state.productName} 
        price={this.updatePrice} 
        userInputPrice={this.state.price} 
        cancel={this.cancel} 
        submit={this.submit}/>
      </div>
    );
  }
}

export default App;
