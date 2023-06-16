import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products : [
        {
          title: "Phone",
          price: 9999,
          qty: 5,
          image : " ",
          id : 0
        },{
          title: "Watch",
          price: 999,
          qty: 10,
          image : " ",
          id : 1
        },{
          title: "Laptop",
          price: 99999,
          qty: 6,
          image : " ",
          id : 2
        }
      ]
    }
    
  }
  
  handleIncreaseQuantity = (product) => {
    console.log("Hey increase quantity of ", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    
    products[index].qty += 1;
    
    this.setState({
      products : products
    });
  };
  
  handleDecreaseQuantity = (product) => {
    console.log("Hey deccrease quantitty of ", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    
    if (products[index].qty === 0){
      return;
    }
    
    products[index].qty -= 1;
    
    this.setState({
      products : products
    });
  };
  
  handleDeleteItems = (id) => {
    console.log(`Deleting Product with id  :${id}`);
    const {products} = this.state;
    const newList = products.filter((item) => item.id !== id); // [new array of products]
    console.log("New List of Products", newList);
    
    this.setState({
      products :newList
    });
  }

  getCartCount= () =>{
    const{products} = this.state;

    let count = 0;

    products.forEach( product=> {
      count += product.qty;
    });

    return count;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()}/>
      <h1> My Cart</h1>
      <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteItems = {this.handleDeleteItems}
      />
      </div>
      );
    }
  }
  
  export default App;
  