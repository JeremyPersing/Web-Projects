import React from 'react';
import Beer from './beer.jpg'
import { Link } from 'react-router-dom';

const Nav = () => {

    

    return (
        <nav className="navbar sticky-top navbar-expand navbar-light bg-light"> 
            <ul className='nav navbar-nav pl-2'>
                <Link  to='/'>
                    <li className='nav-item nav-link'>
                        <img src={Beer} alt='beer logo' height='30px'></img>
                    </li>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/'>
                    <li className='nav-item nav-link'>
                        Home
                    </li>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/shop'>
                    <li className='nav-item nav-link'>
                        Shop
                    </li>
                </Link>
            </ul>
            <ul className='nav navbar-nav pr-2 ml-auto'>
                <Link to='/cart'>
                    <i className="fa fa-shopping-cart" style={{fontSize: '30px', color: 'black', cursor: 'pointer'}}></i>
                </Link>
            </ul>

        </nav>
    )
}

export default Nav;