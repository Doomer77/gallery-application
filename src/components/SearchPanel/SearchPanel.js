import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import './SearchPanel.css';

//SearchPanel
const SearchPanel = () => {
	return (
		<Form inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button className="btn btn-outline-success" variant="outline-success">Search</Button>
		</Form>
	)
}

export default SearchPanel;