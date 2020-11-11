import React from 'react';
import Product from '../Components/Product';
import Natty1 from './natural-photos/natty1.jpeg';
import Natty2 from './natural-photos/natty2.jpeg';
import Natty3 from './natural-photos/natty3.jpeg';
import Natty4 from './natural-photos/natty4.jpg';

const Natural = (props) => {
    return (
        <div id='natural'>
            <div className='container text-center'>
                <h3 className='pt-4 pb-2'>Natural Light</h3>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Product img={Natty1} name='Natural Light 25 oz' price={Number(1).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Natty2} name='Natural Light 6 pack' price={Number(5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Natty3} name='Natural Light 32 oz' price={Number(2).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Natty4} name='Natural Light 30 pack' price={Number(21).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Natural;