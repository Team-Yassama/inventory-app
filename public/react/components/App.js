import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import logo from '../../logo.png'; 


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([{name: 'Kieran', id: 12345}]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	/*useEffect(() => {
		fetchItems();
	}, []);*/

	return (
		<main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
			<div style={{ marginBottom: '20px' }}>
				<img src={logo} id="logo" alt="logo: dodgy 'r' us - with the tagline 'we do dodgy so you don't have to' and a smirking emoji" />
			</div>
			<button>do not click me</button>
			{/* note to self: this might go on our next page <ItemsList items={items} /> */}
			
		</main>
	)
}