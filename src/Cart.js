import React from "react";
import Cartitems from './Cartitems';

class Cart extends React.Component{
    render(){
        return (
            <div className="cart">
             <Cartitems />
             <Cartitems />
             <Cartitems />
            </div>
            );
        }
    }
    
    export default Cart;