import React from 'react';
import Product from '../Components/Product';
import Michelob1 from './michelob-photos/michelob1.jpg';
import Michelob2 from './michelob-photos/michelob2.jpeg';
import Michelob3 from './michelob-photos/michelob3.jpeg';
import Michelob4 from './michelob-photos/michelob4.jpeg';

const Michelob = (props) => {
    return (
        <div id='michelob'>
            <div className='container text-center'>
                <h3 className='pt-4 pb-2'>Michelob Ultra</h3>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Product img={Michelob1} name='Michelob Ultra 25 oz' price={Number(2).toFixed(2)}cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Michelob2} name='Michelob Ultra 6 pack' price={Number(5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Michelob3} name='Michelob Ultra 25 oz' price={Number(2).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Michelob4} name='Michelob Ultra 12 pack' price={Number(22).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Michelob;