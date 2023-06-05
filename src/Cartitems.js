import React from "react";

class Cartitems extends React.Component{

    constructor(){
        super();
        this.state ={
            title: "Phone",
            price: "999",
            qty: 2,
            image : " "
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    };

    increaseQuantity = ()=> {
        console.log("this.state",this.state);
        // // setState form 1
        // this.setState({
        //     qty: this.state.qty +1
        // });
        // setSte form 2 - use if prev state requred
        this.setState((prevState)=>{
            return {
                qty : prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        console.log("this.state",this.state);
        this.setState((prevState) => {
            if(prevState.qty != 0){
                return{
                    qty : prevState.qty -1
                }
            } else
            {
                return{
                    qty : prevState.qty
               }
            }
        });
    }

    render(){
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
            <div className="left">
            <img style={styles.image}/>
            {/* <img alt='Product Image' style={styles.image}/> */}
            </div>
            <div className="right">
            <div className="product-details">
            <div style={{fontSize : 30}}>{title}</div>
            <div style={{color:"grey"}}>Rs {price}</div>
            <div style={{color:"grey"}}>Qty : {qty}</div>
            </div>
            <div className="cart-item-actions">
                <img 
                    alt="delete"
                    className="action-icons" 
                    src="https://www.svgrepo.com/show/502608/delete-2.svg"
                 />
                <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://www.svgrepo.com/show/507821/plus-circle.svg"
                    onClick={this.increaseQuantity}
                />
                <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://www.svgrepo.com/show/506729/minus-circle.svg"
                    onClick={this.decreaseQuantity}
                    
                />
            </div>
            </div>
            </div>
            );
        }
    }
    
    const styles = {
        image: {
            height: 125,
            width: 125,
            borderRadius: 4,
            backgroundColor: "#ccc"
        }
    }
    
    export default Cartitems;