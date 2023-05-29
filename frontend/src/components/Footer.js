import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';

import logo1 from '../../src/images/logo1.png';
import logo2 from '../../src/images/logo2.png';
import logo3 from '../../src/images/logo3.png';
import logo4 from '../../src/images/logo4.png';

const Footer = () => {
  const [showBrands, setShowBrands] = useState(false);

  useEffect(() => {
    setShowBrands(true);
  }, []);

  let date = new Date().getFullYear();
  let Copyright = `${date} Copyright © `;

  return (
    <footer>
      <Container>
        <Row className={`brands py-3 ${showBrands ? 'show' : ''}`}>
          <Col xs={6} md={3} className='brand-logo'>
            <Image src={logo1} alt='Brand 2 Logo' height={50} />
          </Col>
          <Col xs={6} md={3} className='brand-logo'>
            <Image src={logo2} alt='Brand 3 Logo' height={50} />
          </Col>
          <Col xs={6} md={3} className='brand-logo'>
            <Image src={logo3} alt='Brand 4 Logo' height={50} />
          </Col>
          <Col xs={6} md={3} className='brand-logo'>
            <Image src={logo4} alt='Brand 1 Logo' height={50} />
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>{Copyright} Professional Shop</Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <h5>Contact us</h5>
            <p>
              Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=admin%40tiwaahair.com">Contactez-nous</a>
            </p>
            <p>
              Phone: <a href='tel:+32466215078'>+32466215078</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;