import React, { useState } from 'react';

const Product = (props) => {
    const [quantity, setQuantity] = useState(0);  // Used to hold the quantity ordered

    const setCart = () => {

        // Make sure that there is a quantity
        if (quantity > 0) {
            let total = props.price * quantity;
            props.setTotal(props.totalState + total);

            let productPresent = false;  // The product in the cart is set to false as default

            // Check if the product is already in the cart
            for (let i = 0; i < props.cartState.length; i++) {
                if (props.name === props.cartState[i][0]) {
                    productPresent = true; // If the product is present set productPresent = true
                }
            }

            // If the product is present, mutate the current array
            if (productPresent) {
                for (let i = 0; i < props.cartState.length; i++) {
                    if (props.name === props.cartState[i][0]) {
                        let arr = [...props.cartState];  // Create a shallow copy of the cartState
                        arr[i][2] += quantity; // Append the current quantity with the quantity that is already in the cart
                        arr[i][3] += total; // Append the current total with the total that is already in the cart
                        props.setCartState(arr); // Set the cart with the updated version arr
                    }
                }
            }
            // Otherwise, create a new array and append it to cartState
            else {
                props.setCartState(prevState => [...prevState, [props.name, props.price, quantity, total]]);
            }
        }
        // Other, if there's no quantity, alert a message
        else {
            alert('Quantity must be greater than 0');
        }
    }


    return (
        <div className='border'>
            <div className='p-3 text-center'>
                <img src={props.img} alt={props.name} width='80%'></img>
                <p className='m-0'>{props.name}</p>
                <p className='m-1'>Price: $ {props.price}</p>
                <label htmlFor='quantity' className='pr-1'>Quantity</label>
                <input 
                    type='number' 
                    style={{width: '50px'}} 
                    id='quantity'
                    min='1'
                    onChange={e => setQuantity(parseFloat(e.target.value))}>
                </input>
                <br></br>
                <button className='btn btn-primary mt-2' onClick={() => setCart()}>Add to Cart</button>  
            </div>
        </div>
    )
}

export default Product;