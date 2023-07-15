import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import logo from '../components/photo/logoBanniere.png';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
  setIsOpen(!isOpen);
};

const handleSubMenu = (event) => {
  event.preventDefault();
  const subMenu = event.currentTarget.nextElementSibling;
  subMenu.classList.toggle('open');
};

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="Tiwaa Logo"
                style={{ height: '25px', width: '25px' }}
              />
              <span> AllNaturals</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end show">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto" onClick={() => setIsOpen(false)}>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  <span className="ml-1">Chariot</span>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <div className="dropdown-item">
                      <span className="text-truncate">Profile</span>
                    </div>
                  </LinkContainer>
                  <div className="dropdown-item" onClick={logoutHandler}>
                    <span className="text-truncate">Logout</span>
                  </div>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    <span className="ml-1">Sign in</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <div className="dropdown-item">
                      <span className="text-truncate">Users</span>
                    </div>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <div className="dropdown-item">
                      <span className="text-truncate">The products</span>
                    </div>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <div className="dropdown-item">
                      <span className="text-truncate">Orders</span>
                    </div>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </nav>

      <nav class="menu" style={{zIndex: isOpen ? "1" : "0"}}>
    <button class="menu-toggler" onClick={handleToggle}>
      {isOpen ? <i className="fas fa-times"></i> : <span>&#9776;</span>}
    </button>
    <ul class={isOpen ? "open" : ""}>
      <li><Link to='/Presentation' className="">About Our Company</Link></li>
      <li><a  onClick={handleSubMenu}>Our products</a>
        <ul>
        <li><Link to='/search/hair' className="">Hair</Link></li>
        <li><Link to='/search/body' className="">the body</Link></li>
        <li><Link to='/search/face' className="">the face</Link></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>


    
  );
};

export default Header;