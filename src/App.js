import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from './firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products : [],
      loading: true
    }
    
    this.db = firebase.firestore();
    
  }
  
  componentDidMount(){
    
    {
      // firebase
      //   .firestore()
      //   .collection('Products')
      //   .get()
      //   .then((snapshot) => {
      //     console.log(snapshot);
      //     snapshot.docs.map((doc) => {
      //       console.log(doc.data());
      //     });
      
      //     const products = snapshot.docs.map((doc) => {
      //       const data = doc.data();
      //       data['id'] = doc.id;
      //       return data;
      //     });
      //     this.setState({ 
      //       products,
      //       loading : false
      //      });
      //   })
      //   .catch((error) => {
      //     console.log('Error getting products: ', error);
      //   });
    }
    
    
    // firebase
    //   .firestore()
    this.db
    // .collection("Collection Name")  to acces the said collection in database
    .collection('Products')
    // where("field","Condition","Value") can be used to fetch the  desired products
    .where("price", "==" , 99)
    .where("title", "==",'Mouse')
    // onSanpshot(callback function) acts as an event listener and
    // listen to  any changes on the firebase database  
    .onSnapshot((snapshot) => {
      // console.log(snapshot);
      
      // .docs is to to access the data from the current snapshot
      // snapshot.docs.map((doc) => {
      //   // console.log(doc.data());
      // });
      
      
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({ 
        products,
        loading : false
      });
    })
  }
  
  addProduct= () => {
    
    // firebase
    //   .firestore()
    this.db
    .collection('Products')
    // add method return a promise which reject/resolve the action
    // we can handle it by using .then(callback function) and catch(callback function)
    .add({
      img   : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg/1200px-LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg',
      price : 990,
      qty   : 3,
      title : "Camera"
    }).then((docRef) => {
      console.log("Product has been added",docRef);
    }).catch((error)=>{
      console.log("Error",error)
    });
  }
  
  handleIncreaseQuantity = (product) => {
    // this increase the product via state
    {
      // console.log("Hey increase quantity of ", product);
      // const {products} = this.state;
      // const index = products.indexOf(product);
      
      // products[index].qty += 1;
      
      // this.setState({
      //   products : products
      // });
    }
    
    // this increases the product via firebase
    console.log("Hey increase the quantity in firebase of : ", product.title );
    const {products} = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection('Products').doc(products[index].id);
    
     // update method return a promise which reject/resolve the action
    // we can handle it by using .then(callback function) and catch(callback function)
    docRef.update({
      qty : products[index].qty + 1
    }).then(() => {
      console.log(`Quantity of ${product.title} updated successfully`);
    }).catch((error)=>{
      console.log("Error when updating",error);
    });
    
  };
  
  handleDecreaseQuantity = (product) => {
    // this decrease the product via state
    {
      // console.log("Hey deccrease quantitty of ", product);
      // const {products} = this.state;
      // const index = products.indexOf(product);
      
      // if (products[index].qty === 0){
      //   return;
      // }
      
      // products[index].qty -= 1;
      
      // this.setState({
      //   products : products
      // });
    }
    
    // this decrease the product via firebase
    console.log("Hey decrease the quantity in firebase of : ", product.title );
    const {products} = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection("Products").doc(products[index].id);
    docRef.update({
      // qty : products[index].qty - 1
      qty : product.qty - 1
    }).then(()=>{
      console.log(`Quantity of ${product.title} updated successfully`);
    }).catch((error)=> {
      console.log("Error when updating",error);
    });
    
  }
  
  handleDeleteItems = (id) => {
    {
      // console.log(`Deleting Product with id  :${id}`);
      // const {products} = this.state;
      // const newList = products.filter((item) => item.id !== id); // [new array of products]
      // console.log("New List of Products", newList);
      
      // this.setState({
      //   products :newList
      // });
    }
    
    console.log(`Deleting Product with id  :${id}`);
    const {products} = this.state;
    
    const docRef = this.db.collection("Products").doc(id);
    
    docRef
    .delete()
    .then(()=> {
      console.log("Product deleted successfully.")
    }).catch((error)=> {
      console.log("Error",error)
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
    const {products,loading} = this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()}/>
      <h1> My Cart</h1>
      <button onClick={this.addProduct} style={{padding : 10, fontSize : 20}} >Add a product</button>
      <Cart 
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteItems = {this.handleDeleteItems}
      />
      {loading && <h1> Loading Products...</h1>}
      <div>
      <h3>TOTAL: Rs {this.getCartTotal()}</h3>
      </div>
      </div>
      );
    }
  }
  
  export default App;
  