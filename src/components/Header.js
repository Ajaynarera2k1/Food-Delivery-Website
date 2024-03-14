import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_s5bUSPJvT9VDeqlysyx9bhdpifYKgoNKixsUUKCEQ9xuaOfcA60iLjZ0SAw0pi7VJ4&usqp=CAU"
            alt="Logo"
            className="w-[10rem]"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul className='flex gap-6  font-bold  p-4 m-4 text-md uppercase'>
          <li>Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="links">Cart</Link>
          </li>
          <button
            className="loginBtn uppercase"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
