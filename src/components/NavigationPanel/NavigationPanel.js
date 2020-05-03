//NavigationPanel
import React, { Component } from 'react';
import LogoText from '../LogoText/LogoText';
import ButtonToggler from '../NavLIst/ButtonToggler/ButtonToggler';
import NavBarCollaps from '../NavBarCollaps/NavBarCollaps';
import './NavigationPanel.css';

export default class NavigationPanel extends Component{

	state = {
		visibility: false
	}

	menuOpen = () => {
		this.setState(({visibility}) => {
			return {
				visibility: !visibility
			}
		});
	};



	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<LogoText />
				<ButtonToggler menuOpen = {this.menuOpen} />
				<NavBarCollaps menuVisibility = { this.state.visibility }/>
			</nav>
		)
	}
}
