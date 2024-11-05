import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../config'
import { useSelector } from 'react-redux'
import Message from '../components/Message'


function VerifyOtp() {

    const userLogin = useSelector(state => state.userLogin)
    const {  userInfo } = userLogin

    const [otp, setOtp] = useState('')

    const navigate = useNavigate();

    const [msg, setMsg] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault()
        const token = userInfo.access;
  
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    
    try {
        const response = await axios.post(`${BASE_URL}/otpverify/`, {"otp":otp}, config);

        if (response.data['detail'] == "OTP verified successfully") {
            navigate('/')
        } else {
            console.log(response.data['detail'])
        }
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      setMsg(error.response.data['detail'])
    }
    }

    return (
      
            <Form onSubmit={submitHandler}>
              {msg && <Message variant='danger'>{msg}</Message>}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group controlId='postalCode' className="my-2">
                            <Form.Label>Enter OTP is Send to {userInfo.username} </Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Enter OTP'
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button type='submit' variant='dark' className="mt-3 btn-block">
                    Continue
                </Button>
            </Form>

    )
}

export default VerifyOtp