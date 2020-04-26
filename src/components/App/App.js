import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from '../Header';
import SectionSelect from "../SectionSelect/SectionSelect";
import SectionCards from "../SectionCards";
import src1 from '../../img/photo-192.jpg';
import src2 from '../../img/photo-249.jpg';
import './App.css';

//App
const App = () => {

	const cardData = [
		{ 	id: 1, label: "Best friends", src: src1 , date: {day: '19', month : '04', year : '2020'}, category: "animals", subcategory: "horses"},
		{ 	id: 2, label: "The reeds were noisy", src: src2 , date: {day: '20', month : '04', year : '2020'}, category: "plants", subcategory: "cane"}
	]

	return (
		<div className="container-fluid">
			<Header />
			<SectionSelect card = { cardData }/>
			<SectionCards card = { cardData }/>
		</div>
	)
}

export default App;

