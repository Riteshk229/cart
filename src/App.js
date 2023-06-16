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
          image : "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          id : 0
        },{
          title: "Watch",
          price: 999,
          qty: 10,
          image : "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          id : 1
        },{
          title: "Laptop",
          price: 99999,
          qty: 6,
          image : "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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

  getCartTotal=()=>{
    const {products} = this.state;
    let total = 0;

    products.forEach( product => {
      total += product.qty*product.price;
    });

    return total;
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
      <div>
        <h3>TOTAL: Rs {this.getCartTotal()}</h3>
      </div>
      </div>
      );
    }
  }
  
  export default App;
  