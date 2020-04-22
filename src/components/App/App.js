import React from 'react';
import Header from '../Header/Header';
import SectionSelect from "../SectionSelect/SectionSelect";
import SectionCards from "../SectionCards/SectionCards";
import './App.css';

//App
const App = () => {

	const cardData = [
		{ 	label: "Best friends",
			src: "../../img/photo-192.jpg",
			date: {
				day: '19',
				month : '04',
				year : '2020'
			},
		}
	]

	return (
		<div className="container-fluid">
			<Header />
			<SectionSelect />
			<SectionCards card = { cardData }/>
		</div>
	)
}

export default App;

