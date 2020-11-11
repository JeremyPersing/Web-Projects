import React from 'react';
import Product from '../Components/Product';
import Busch1 from './busch-photos/busch1.jpg';
import Busch2 from './busch-photos/busch2.jpeg';
import Busch3 from './busch-photos/busch3.jpeg';
import Busch4 from './busch-photos/busch4.jpg';

const Busch = (props) => {
    return (
        <div id='busch'>
            <div className='container text-center'>
                <h3 className='pt-4 pb-2'>Busch</h3>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Product img={Busch1} name='Busch 16 oz' price={Number(1).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Busch2} name='Busch 6 pack' price={Number(5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Busch3} name='Busch 40 oz' price={Number(2.5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Busch4} name='Busch 30 pack' price={Number(20).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Busch;