import React, { Component } from 'react';
import NavList from '../NavLIst/NavList';
import SearchPanel from '../SearchPanel/SearchPanel';
import './NavBarCollaps.css';

export default class NavBarCollaps extends Component {
	render() {

		let classNameNavBarCollaps = "collapse navbar-collapse animation";
		const { menuVisibility } = this.props;
		if(menuVisibility) {
			classNameNavBarCollaps += ' show';
		}

		return(

		<div className={ classNameNavBarCollaps }>
			<NavList />
			<SearchPanel />
		</div>
		);
	}
};
