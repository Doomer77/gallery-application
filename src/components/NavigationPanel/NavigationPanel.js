//NavigationPanel
import React, { Component } from 'react';
import { Navbar} from "react-bootstrap";
import LogoText from '../LogoText/LogoText';
import ButtonToggler from '../ButtonToggler/ButtonToggler';
import NavBarCollaps from '../NavBarCollaps/NavBarCollaps';
import './NavigationPanel.css';

export default class NavigationPanel extends Component {

	state = {
		visibility: false,
		width: 0,
		height: 0,
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	menuOpen = () => {
		this.setState(({ visibility }) => {
			return {
				visibility: !visibility
			}
		});
	};

	render() {
		const { visibility, width } = this.state;
		return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<LogoText />
				<ButtonToggler menuOpen={this.menuOpen} />
				{visibility || width > 920
					? <NavBarCollaps />
					: null}
			</Navbar>
		)
	}
}
