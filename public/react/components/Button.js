import React, {useState, useEffect} from 'react';
import { ItemsList } from './ItemsList';
import apiURL from '../api';

export const Button = ({ items, setItems }) => {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newItem, setNewItem] = useState({
        title: "",
        description: "",
        price: 0, 
        image: "",
    });

    function handleClick() {
        setIsFormVisible(!isFormVisible);
    };

    function handleChange(event) {
        const id = event.target.id
        setNewItem({
            ...newItem,
            [id]:event.target.value,
        })
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const res = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {"content-type": "application/JSON"},
            body: JSON.stringify(newItem)
        })
        if(res.ok){
            const item = await res.json()
            console.log(item)
            setItems([...items, item]);
            setNewItem({
                title: "",
                description: "",
                price: 0, 
                image: "",
            });
        } else {
            console.log("failed");
        }
    };

    return (
        <div className='form'>
            <section id="purpleform">
            <h5 className='form-title'>
                    Add New Item
            </h5>
            <button onClick={handleClick}>Add item

            </button>
            {isFormVisible && (
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor='title'>
                            Title:
                        </label>
                        <br />
                        <input id="title" type="text" value={newItem.title} onChange={handleChange} />
                    </p>

                    <p>
                        <label htmlFor="description">
                            Item Description:
                        </label>
                        <br />
                        <input id="description" type="text" value={newItem.description} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor='price'>
                            Item Price:
                        </label>
                        <br />
                        <input id="price" type='number' value={newItem.price} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label htmlFor='image'>
                            Item picture:
                        </label>
                        <br />
                        <input id="image" type="text" value={newItem.image} onChange={handleChange}/>
                    </p>
                    <p>
                        <button>Submit</button>
                    </p>
                    <p><strong>PLEASE NOTE BECAUSE WE ARE SO DODGY YOU WILL NEED TO REFRESH THIS PAGE TO VIEW YOUR ITEM</strong></p>
                </form>
            
              
            )}
            </section>
        </div>
    );


};