import React, { Component } from 'react';
import NavList from '../NavLIst/NavList';
import SearchPanel from '../SearchPanel/SearchPanel';
import './NavBarCollaps.css';

export default class NavBarCollaps extends Component {
	render() {
		return(
		<div className="collapse navbar-collapse">
			<NavList />
			<SearchPanel />
		</div>
		);
	}
};
