import React from 'react';

export const Item = (props) => {

const handleClick = () => props.fetchSingleItem(props.items.id);

  return <>
      <div className="itemslist" style={{ maxWidth: '50%', height: 'auto', textAlign: 'center' }}>
        <h3>{props.items.title}</h3>
        <img src={props.items.image} alt={props.items.title}  style={{ maxWidth: '50%', height: 'auto'}}/>
        <button onClick={handleClick}>DODGY DETAILS</button>
      </div>
  </>
} 
	