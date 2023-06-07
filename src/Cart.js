import React from "react";
import Cartitems from './Cartitems';

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
            products : [
                {   title: "Phone",
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
render(){
    // console.log("this.state",this.state);
    const { products } = this.state;
    return (
        <div className="cart">
        {products.map((product) => (
                    <Cartitems
                        items={product}
                        key={product.id}
                    />
                ))}
            <Cartitems/>
            {/* <Cartitems />
        <Cartitems /> */}
        </div>
        );
    }
}

export default Cart;