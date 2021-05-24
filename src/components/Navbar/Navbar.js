import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button} from '../Button.js';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


function Navbar({ totalItems }) {
    const classes = useStyles();

    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      }else{
        setButton(true);
      }
    };

    useEffect(() => {
      showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
      <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Bear <i class="fas fa-ice-cream"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign up</Button>}

          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color ="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart color="inherit"/>
              </Badge>
            </IconButton>
          </div>

        </div>
      </nav>
      </>
    )
}

export default Navbar
