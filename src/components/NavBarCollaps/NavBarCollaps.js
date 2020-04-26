import React from 'react';
import NavList from '../NavLIst/NavList';
import SearchPanel from '../SearchPanel/SearchPanel';
import './NavBarCollaps.css';

const NavBarCollaps = () => {
	return(
		<div className="collapse navbar-collapse">
			<NavList />
			<SearchPanel />
		</div>
	)
}

export default NavBarCollaps;
