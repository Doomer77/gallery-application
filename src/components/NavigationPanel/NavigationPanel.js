//NavigationPanel
import React from 'react';
import LogoText from '../LogoText/LogoText';
import ButtonToggler from '../ButtonToggler/ButtonToggler';
import NavBarCollaps from '../NavBarCollaps/NavBarCollaps';
import './NavigationPanel.css';

const NavigationPanel = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<LogoText />
			<ButtonToggler />
			<NavBarCollaps/>
		</nav>
	)
}

export default NavigationPanel;