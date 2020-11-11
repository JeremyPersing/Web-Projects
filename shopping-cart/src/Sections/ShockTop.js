import React from 'react';
import Product from '../Components/Product';
import ShockTop1 from './shocktop-photos/shocktop1.jpg';
import ShockTop2 from './shocktop-photos/shocktop2.jpg';
import ShockTop3 from './shocktop-photos/shocktop3.jpeg';
import ShockTop4 from './shocktop-photos/shocktop4.jpg';

const ShockTop = (props) => {
    return (
        <div id='shocktop'>
            <div className='container text-center'>
                <h3 className='pt-4 pb-2'>Shock Top</h3>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Product img={ShockTop1} name='Shock Top 16 oz' price={Number(1).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={ShockTop2} name='Shock Top 6 pack' price={Number(5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={ShockTop3} name='Shock Top 25 oz' price={Number(2).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={ShockTop4} name='Shock Top 24 pack' price={Number(25).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default ShockTop;