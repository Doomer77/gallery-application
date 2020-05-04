import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import './ButtonToggler.css';

//ButtonToggler
export default class ButtonToggler extends Component{

	render() {
		const { menuOpen } = this.props;
		return (
			<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ menuOpen }/>
		)
	}
};
