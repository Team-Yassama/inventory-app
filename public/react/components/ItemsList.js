import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items}) => {
	return <>
		{
			items.map((items, idx) => {
				return <Item items={items} key={idx} />
			})
		}
	</>
} 
