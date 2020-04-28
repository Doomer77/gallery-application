import React, { Component } from 'react';
import './ButtonToggler.css';

//ButtonToggler
export default class ButtonToggler extends Component{

	test = () => {
		console.log(`this button`);
	}

	render() {
		return (
			<button className="navbar-toggler" type="button" onClick = { this.test }>
				<span className="navbar-toggler-icon"></span>
			</button>
		)
	}
};
