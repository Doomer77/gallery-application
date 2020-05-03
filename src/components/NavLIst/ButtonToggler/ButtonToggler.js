import React, { Component } from 'react';
import './ButtonToggler.css';

//ButtonToggler
export default class ButtonToggler extends Component{

	render() {
		const { menuOpen } = this.props;
		return (
			<button className="navbar-toggler" type="button" onClick={ menuOpen }>
				<span className="navbar-toggler-icon"></span>
			</button>
		)
	}
};
