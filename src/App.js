import React from 'react';

import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import Product from './components/Product';
import MyOrderScreen from './screens/MyOrderScreen'
import VerifyOtp from './components/VrifyOtp';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Refund from './components/Refund';
import ShippingPolicy from './components/ShipPolicy';

function App() {
  return (
    <BrowserRouter>

    <Header />

      <main className="py-3">
        <Container>

          <Routes>
            
            <Route path='/'  element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/pro' element={<Product />} />
            <Route path='/verifyotp' element={<VerifyOtp />} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/refund" element={<Refund/>} />
            <Route path="/shippolicy" element={<ShippingPolicy/>} />
            <Route path="/myorder" element={<MyOrderScreen/>} />

          </Routes>

        </Container>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
