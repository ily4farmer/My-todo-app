import React from 'react'

import './AddItem.css'

const AddItem = () => {
    return (
        <div className='add-item'>
            <input type='text' placeholder='Type text' 
            className="add-item__input"/>
            <button className="add-item__button">Add</button>
        </div>
    );
};

export default AddItem;