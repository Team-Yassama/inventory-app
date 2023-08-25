import React from 'react';
import { Item } from './Item';
import { Button } from './Button';

export const ItemsList = ({ items, fetchSingleItem, setItems }) => (
	<>
	<div id="parent-div">
	  {items.map((item, idx) => (
		<Item items={item} key={idx} fetchSingleItem={fetchSingleItem} />
	  ))}
	</div>
	<Button items={items} setItems={setItems} />
	</>
  );
