import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress, savePaymentMethod } from '../actions/cartActions'
import './ShippingScreen.css'

function ShippingScreen() {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [address, setAddress] = useState(shippingAddress.address || '')
    const [city, setCity] = useState(shippingAddress.city || '')
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '')
    const [country, setCountry] = useState(shippingAddress.country || '')
    const paymentMethod = 'Phone pe'

    const submitHandler = (e) => {
        e.preventDefault()

        if (!address || !city || !postalCode || !country) {
            return alert('Please fill in all the required fields')
        }

        dispatch(savePaymentMethod(paymentMethod))
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1 className="heading">Shipping Information</h1>
            <form onSubmit={submitHandler}>
             
                    <div className="form-col">
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            required
                            type="text"
                            placeholder="Enter address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="form-col">
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            required
                            type="text"
                            placeholder="Enter city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="form-col">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            id="postalCode"
                            required
                            type="text"
                            placeholder="Enter postal code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="form-col">
                        <label htmlFor="state">State</label>
                        <input
                            id="state"
                            required
                            type="text"
                            placeholder="Enter state"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="input-field"
                        />
                    </div>
                <button type="submit" className="button5">
                    Continue
                </button>
            </form>
        </FormContainer>
    )
}

export default ShippingScreen

