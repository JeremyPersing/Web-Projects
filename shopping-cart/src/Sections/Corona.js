import React from 'react';
import Product from '../Components/Product';
import Corona1 from './corona-photos/corona1.jpg';
import Corona2 from './corona-photos/corona2.jpg';
import Corona3 from './corona-photos/corona3.jpg';
import Corona4 from './corona-photos/corona4.jpg';

const Corona = (props) => {
    return (
        <div id='corona'>
            <div className='container text-center'>
                <h3 className='pt-4 pb-2'>Corona</h3>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Product img={Corona1} name='Corona 16 oz' price={Number(1).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Corona2} name='Corona 6 pack' price={Number(5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Corona3} name='Corona 40 oz' price={Number(2.5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Corona4} name='Corona 24 pack' price={Number(22).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Corona;