import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Badge } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom';
import { MdShoppingCartCheckout } from "react-icons/md";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../config";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  console.log(cartItems)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  const navigate = useNavigate();



  const sendOtp = async () => {
    const token = userInfo.access;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(`${BASE_URL}/otpsend/`, config);

      if (response.data['detail'] == "OTP verified successfully") {
        console.log(response.data)
        navigate('/verifyotp')
      } else {
        console.log(response.data['detail'])
      }
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <LinkContainer to='/'>
            <Nav.Link> <h2>
              <span>R</span>ao
              <span>S</span>ha
            </h2></Nav.Link>

          </LinkContainer>

        </div>

        {/* 2nd menu part  */}

        <div
          className={
            "menu-link"
          }>

          <ul>
            <li>
              <LinkContainer to='/cart'>
                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart <Badge>{cartItems.length}</Badge></Nav.Link>
              </LinkContainer>
            </li>


            {userInfo ? (
              <>
                <li>
                  <LinkContainer to='/profile'>
                    <Nav.Link>{userInfo.name}</Nav.Link>

                  </LinkContainer>

                  <button onClick={sendOtp}  >Verify</button>

                </li>

                <li>
                  <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                </li>
              </>
            ) : (
              <li>
                <LinkContainer to='/login'>
                  <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                </LinkContainer>
              </li>
            )}
          </ul>

        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu ">
            {userInfo ? (
              <li className="pro-icon">
              <LinkContainer to='/profile'>
                <Nav.Link><i className="fas fa-user"> </i> {userInfo.name}</Nav.Link>
              </LinkContainer>

            </li>
            ) : (
              <li className="pro-icon">
                <LinkContainer to='/login'>
                  <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                </LinkContainer>
              </li>

            )}
          
            <div className="cart-icon">
            <LinkContainer to='/cart'>
                <Nav.Link> <MdShoppingCartCheckout />
                <span className="item-count">{cartItems.length}</span></Nav.Link>
              </LinkContainer>
             
            </div>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
