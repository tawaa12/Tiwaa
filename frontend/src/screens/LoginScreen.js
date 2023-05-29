import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import './LoginScreen.css';

import product2 from '../components/photo/logoAllnaturals3.png';
import myImage from '../../src/images/HuileDeKarite.jpg';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#ffff";
    // Vous pouvez aussi modifier d'autres propriétés CSS pour le corps ici si nécessaire
    // par exemple: document.body.style.color = "white";
    return () => {
      document.body.style.backgroundColor = null;
      // Vous pouvez également supprimer les autres propriétés CSS ici si vous en avez modifié
      // par exemple: document.body.style.color = null;
      // Voila Oleko
    };
  }, []);

  return (
    

    // #d1d1cf
    <section class="child-section" >
      <div style={{ backgroundColor: '#dddddd', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)), url(${myImage})`}}>

      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-md-8 col-lg-6 col-xl-5">
            <div class="card" style={{ borderRadius: '1rem' }}>
              <div class="card-body p-5">
                <div className="text-center mb-4">
                  <img src={product2} alt="Product 2" className="d-block w-250"
                    style={{ objectFit: "cover", height: "100px", width: "30%", margin: "auto" }}
                  />
                </div>
                <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                  Login to your account
                </h5>

                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='primary'>
                    Sign in
                  </Button>
                </Form>

                <Row className='py-3'>
                  <Col>
                    You do not have an account?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                      Sign up here
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}

export default LoginScreen


