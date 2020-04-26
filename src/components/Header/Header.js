import React from 'react';
import './Header.css';
import NavigationPanel from '../NavigationPanel';

//Header
const Header = () => {
	return (
		<header className="header">
			<NavigationPanel />
		</header>
	)
}

export default Header;