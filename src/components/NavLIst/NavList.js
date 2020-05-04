//NavList
import React from 'react';
import { Nav } from "react-bootstrap";
import './NavList.css';

const NavList = () => {
	return (
		<Nav className="mr-auto">
			<Nav.Link href="#home"><i className="fa fa-home" aria-hidden="true"></i>Home</Nav.Link>
			<Nav.Link href="#gallery"><i className="fa fa-camera" aria-hidden="true"></i>Gallery</Nav.Link>
			<Nav.Link href="#login"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</Nav.Link>
		</Nav>
	)
}

export default NavList;