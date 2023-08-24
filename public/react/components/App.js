import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import logo from '../../logo.png'; 


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [activeItem, setActiveItem] = useState(null);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSingleItem(id){
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const itemData = await response.json();
			
			setActiveItem(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	if(activeItem) {
		return (
		<>
		<button onClick={() => setActiveItem(null)}>GO BACK TO ITEMS YOU SILLY SAUSAGE</button>
		<h1>{activeItem.title}</h1>
		<p className='description'>{activeItem.description}</p>
		<p className='price'>Dodgy Price 4 U: {activeItem.price}</p>
		<img className='images' src={activeItem.image} alt={activeItem.title}/>
	</>
	)}

	if(items.length > 0){
		return (
			<>
			<button onClick={() => setItems([])}>GO HOME LADIES</button>
			<ItemsList items={items} fetchSingleItem={fetchSingleItem} />
	
			</>
		)
	}

	return (
		<>
		<main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
			<div style={{ marginBottom: '20px' }}>
				<img src={logo} id="logo" alt="logo: dodgy 'r' us - with the tagline 'we do dodgy so you don't have to' and a smirking emoji" />
			</div>
			<button onClick={fetchItems}>do not click me</button>
		</main>

		</>
	)
}