import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const displayTotal = () => {
        if (props.totalState > 0) {
            return (
                <div>
                    <h5>Total: ${Number(props.totalState).toFixed(2)}</h5>
                    <div className='pt-3 row'>
                        <div className='mx-auto'>
                            <Link to='/shop'>
                                <button className='btn btn-secondary mr-5'>Continue Shopping</button>
                            </Link>
                            <button className='btn btn-primary ml-5' onClick={() => alert('Sorry you can\'t actually checkout')}>Checkout</button>
                        </div>
                    </div>
                </div>
                
            )
        }
    }

    const displayCart = () => {
        let arr = [];

        for (let i = 0; i < props.cartState.length; i++) {
            arr.push(
                <tr>
                    <td>{props.cartState[i][0]}</td>
                    <td>${Number(props.cartState[i][1]).toFixed(2)}</td>
                    <td>{props.cartState[i][2]}</td>
                    <td>{Number(props.cartState[i][3]).toFixed(2)}</td>
                    <td>
                        <i className="fa fa-trash" onClick={() => removeItem(props.cartState[i][0])} 
                        style={{fontSize: '25px', color: 'red', cursor: 'pointer'}}></i>    
                    </td>
                </tr>
            )
        }
        return arr;
    }

    const removeItem = (name) => {
        let array = [...props.cartState];
        let index;
        let price;
        for (let i = 0; i < array.length; i++) {
            if (name === array[i][0]) {
                index = i;
                price = array[i][3];
            }
        }

        array.splice(index, 1);
        props.setTotal(props.totalState - price);
        props.setCartState(array);
    }

    return (
        <div className='text-center'>
            <h1>Cart</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Total</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {displayCart()}
                </tbody>
            </table>
            {displayTotal()}
        </div>
    )
}

export default Cart;