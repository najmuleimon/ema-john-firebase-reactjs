import React, { useEffect } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/Logo.svg';
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";

import './Header.css';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading/>
    }

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar bg="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Shop</NavLink>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link dropdown-item" : "dropdown-item")}>Sign in</NavLink>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link dropdown-item" : "dropdown-item")}>Sign up</NavLink>
                        <NavDropdown.Divider />
                        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
                    </NavDropdown>
                    {
                        user ? <p className='nav-link'>{user.displayName}</p> :
                        <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Login</NavLink> 
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;