import React from 'react';
import Product from '../Components/Product';
import Bud1 from './budweiser-photos/bud1.jpg'
import Bud2 from './budweiser-photos/bud2.jpg';
import Bud3 from './budweiser-photos/bud3.jpg';
import Bud4 from './budweiser-photos/bud4.jpg';

const Budweiser = (props) => {
    return (
        <div id='budwesier'>
            <div className='container text-center'>
                <h3 className='pt-4 pb-2'>Budweiser</h3>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Product img={Bud1} name='Budweiser 16 oz' price={1.25} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Bud2} name='Budweiser 6 pack' price={Number(5).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Bud3} name='Budweiser 40 oz' price={Number(2.50).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                    <div className='col-lg-3'>
                        <Product img={Bud4} name='Budweiser 30 pack' price={Number(23).toFixed(2)} cartState={props.cartState} 
                        totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}>
                        </Product>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budweiser;