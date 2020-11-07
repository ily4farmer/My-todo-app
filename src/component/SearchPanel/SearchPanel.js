import React from 'react'
import './SearchPanel.css'

const SearchPanel = ({searchText, value, event}) => {
    return (
        <div>
            <input type='text' placeholder='Search...' 
            className="search-panel"
            onChange={event}
            value={value}/>
        </div>
    );
};

export default SearchPanel;