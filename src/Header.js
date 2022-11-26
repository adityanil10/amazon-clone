import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

// Link links a division or an object with a certain link and upon click redirects the page to that specified link
//basket?.length the ? means that if u for any reason don't have correct value or basket becomes undefined due to some error it won't freak out. it will handle the error

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/">
            <img 
                className='header_logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="AMAZON LOGO"
            />
        </Link> 

        <div className='header_search'>
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className='header_optionLineOne'>Hello {user ? user?.email : 'Guest'}</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>

            <div className="header_option">
                <span className='header_optionLineOne'>Return</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>

            <div className="header_option">
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo
                     header_basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Header