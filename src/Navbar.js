import React from "react";

// Functional Component
const Navbar = (props)=>{

    console.log(props);
        return (
            <div style={style.nav}>
                <div style={style.cartIconContainer}>
                    <img style={style.cartIcon} src='https://www.svgrepo.com/show/509786/cart.svg' alt="cart-icon"/>
                    <span style={style.cartCount}> {props.count} </span>
                </div>
            </div>
        );
}

// // Class Component
// class Navbar extends React.Component{
//     render() {
//         return (
//             <div style={style.nav}>
//                 <div style={style.cartIconContainer}>
//                     <img style={style.cartIcon} src='https://www.svgrepo.com/show/509786/cart.svg' alt="cart-icon"/>
//                     <span style={style.cartCount}> 3 </span>
//                 </div>
//             </div>
//         );
//     };
// }

const style = {
    cartIcon : {
        height: 50,
        width: 50,
        marginRight: 40
    },
    nav : {
        height : 70,
        background: '#3A00B2',
        display: 'flex',
        justifyContent : 'flex-end',
        alignItems: 'center',
        position: 'sticky',
    },
    cartIconContainer : {
        position : 'relative'
    },
    cartCount : {
        position : 'absolute',
        background: 'Yellow',
        opacity: '0.9',
        borderRadius: '50%',
        top: -3,
        right:38,
        padding: '2px 6px'
    }
};

export default Navbar;