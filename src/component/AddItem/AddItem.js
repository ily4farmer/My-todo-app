import React from 'react'

import './AddItem.css'

const AddItem = ({value, changeValue,addItem}) => {
    return (
        <form className='add-item'
            onSubmit={addItem.bind(this)}>
            <input type='text' placeholder='Type text' 
            className="add-item__input"
            value={value} 
            onChange={changeValue}/>
            <button className="add-item__button">Add</button>
        </form>
    );
};

export default AddItem;