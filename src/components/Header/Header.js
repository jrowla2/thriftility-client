import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import '../../index.scss'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/items' className='nav-link'>Inventory</NavLink>
    <NavLink to='/create-item' className='nav-link'>Create Item</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/* <NavLink exact to='/home' className='nav-link'>Home</NavLink> */}
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className='navbar-style' style={{ backgroundColor: '#4a6f4c' }} variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/'><span className='name-style'>Thriftility</span></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'></span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
