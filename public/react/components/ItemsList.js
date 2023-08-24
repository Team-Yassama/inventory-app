import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, fetchSingleItem}) => {
	return <div id="parent-div">
		{
			items.map((items, idx) => {
				return <Item items={items} key={idx} fetchSingleItem={fetchSingleItem} />
			})
		}
	</div>
} 
