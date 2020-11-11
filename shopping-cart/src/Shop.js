import React from 'react';
import Budweiser from './Sections/Budweiser';
import Busch from './Sections/Busch';
import Corona from './Sections/Corona';
import Michelob from './Sections/Michelob';
import Natural from './Sections/Natural';
import ShockTop from './Sections/ShockTop';

const Shop = (props) => {

    return (
        <div>
            <h1 className='pt-3 text-center'>Shop Your Favorites</h1>
            <Budweiser cartState={props.cartState} 
            totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}/>
            <Busch cartState={props.cartState} 
            totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}/>
            <Corona cartState={props.cartState} 
            totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}/>
            <Michelob cartState={props.cartState} 
            totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}/>
            <Natural cartState={props.cartState} 
            totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}/>
            <ShockTop cartState={props.cartState} 
            totalState={props.totalState} setTotal={props.setTotal} setCartState={props.setCartState}/>
        </div>
    )
}

export default Shop;