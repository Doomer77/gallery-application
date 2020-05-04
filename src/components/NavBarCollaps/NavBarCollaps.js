import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import NavList from '../NavLIst/NavList';
import SearchPanel from '../SearchPanel/SearchPanel';
import './NavBarCollaps.css';

export default class NavBarCollaps extends Component {
	render() {
		return (
			<Navbar.Collapse id="basic-navbar-nav">
				<NavList />
				<SearchPanel />
			</Navbar.Collapse>
		);
	}
};
