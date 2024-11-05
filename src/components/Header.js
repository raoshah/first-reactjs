import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { useNavigate, Link } from 'react-router-dom';
import { AiFillShopping } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logoImage from '../photos/logo.png'
import myOrder from '../photos/myorder.png'
import './Header.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        closeMenu();
        dispatch(logout());
        navigate('/login');
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', closeMenu);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', closeMenu);
        };
    }, []);

    useEffect(() => {
        closeMenu()
        window.scrollTo(0, 0)
      }, [navigate]);

    return (
        <>
            <nav className="navbar">
                {isMobile && (
                    <div className="menu-icon" onClick={toggleMenu}><IoMenu /></div>
                )}
                <Link to={'/'} className="navbar-logo"> <img src={logoImage} alt='logo-img' className='logoImage'></img></Link>
                <Link to={'/cart'} className="navbar-cart">
                    <AiFillShopping /><span>{cartItems.length}</span>
                </Link>

                {isMobile ? (
                    <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
                        
                            {userInfo ? (<>
                                <Link to={'/profile'} className="login-icon "><FaRegUserCircle /> {userInfo.name}</Link>
                                <Link to={'/myorder'} className="login-icon"> <img src={myOrder} alt='order-img' className='logoImage'></img> My order</Link>
                                </>
                            ) : (
                                <Link to={'/login'} className="login-icon" onClick={closeMenu}>
                                    Login <MdLogin />
                                </Link>
                            )}

                      
                        
                        <Link to="/terms" className="menu-link link" onClick={closeMenu}>
                            Terms of Service
                        </Link>
                   
                        <Link to="/privacy" className="menu-link link" onClick={closeMenu}>
                            Privacy Policy
                        </Link>
             
                        <Link to="/refund" className="menu-link link" onClick={closeMenu}>
                            Refund Policy
                        </Link>
                
                        <Link to="/shippolicy" className="menu-link link" onClick={closeMenu}>
                            Shipping Policy
                        </Link>

                        {userInfo && <div className="login-icon" onClick={logoutHandler}>Logout <MdLogin /></div>}
                    </div>
                ) : (
                    <div className="desktop-menu">
                               <Link to={'/profile'} className="login-icon "><FaRegUserCircle /> {userInfo.name}</Link>
                               <Link to={'/myorder'} className="login-icon"> <img src={myOrder} alt='order-img' className='logoImage'></img> My order</Link>
                    </div>
                )}
               
            </nav>
            <div className="content">
                {/* page content here */}
            </div>
        </>
    );
};

export default Navbar;
