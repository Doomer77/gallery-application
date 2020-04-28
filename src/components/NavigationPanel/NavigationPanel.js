//NavigationPanel
import React, { Component } from 'react';
import LogoText from '../LogoText/LogoText';
import ButtonToggler from '../ButtonToggler/ButtonToggler';
import NavBarCollaps from '../NavBarCollaps/NavBarCollaps';
import './NavigationPanel.css';

export default class NavigationPanel extends Component{
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<LogoText />
				<ButtonToggler />
				<NavBarCollaps/>
			</nav>
		)
	}
}
