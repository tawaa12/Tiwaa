import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

import product2 from '../components/photo/logoAllnaturals3.png';
import myImage from '../../src/images/HuileViergeOil.jpg';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#ffff";
    // Vous pouvez aussi modifier d'autres propriétés CSS pour le corps ici si nécessaire
    // par exemple: document.body.style.color = "white";
    return () => {
      document.body.style.backgroundColor = null;
      // Vous pouvez également supprimer les autres propriétés CSS ici si vous en avez modifié
      // par exemple: document.body.style.color = null;
    };
  }, []);

  return (
    <section class="child-section">
    <div style={{ backgroundColor: '#dddddd', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url(${myImage})`}}>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card rounded-3">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <img src={product2} alt="Product 2" className="d-block w-250"
                    style={{ objectFit: "cover", height: "100px", width: "30%", margin: "auto" }}
                  />
                </div>
                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                  Register to create an account
                </h5>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='name'>
                    <Form.Label>Non</Form.Label>
                    <Form.Control
                      type='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='email'>
                    <Form.Label>E-mail address</Form.Label>
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

                  <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Confirm password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='primary'>
                    Register
                  </Button>
                </Form>

                <Row className='py-3'>
                  <Col>
                    Have an account?{' '}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                      Connexion
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  )
}

export default RegisterScreen