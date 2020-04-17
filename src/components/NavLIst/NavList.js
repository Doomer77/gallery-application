//NavList
import React from 'react';
import './NavList.css';

const NavList = () => {
	return (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
				<a className="nav-link" href="/"><i className="fa fa-home" aria-hidden="true"></i>Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/"><i className="fa fa-camera" aria-hidden="true"></i>Gallery</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</a>
				</li>
    	</ul>
	)
}

export default NavList;