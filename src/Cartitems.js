import React from "react";

class Cartitems extends React.Component{
    render(){
        return (
            <div className="cart-item">
            <div className="left">
            <img style={styles.image}/>
            </div>
            <div className="right">
            <div className="product-details">
            <div style={{fontSize : 30}}>Phone</div>
            <div style={{color:"grey"}}>Rs 999</div>
            <div style={{color:"grey"}}>Qty: 2</div>
            </div>
            <div className="cart-item-actions">
            
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
            borderRadius: 4
        }
    }
    
    export default Cartitems;