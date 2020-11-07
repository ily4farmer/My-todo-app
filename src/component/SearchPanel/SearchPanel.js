import React from 'react'
import './SearchPanel.css'

const SearchPanel = ({searchText, value, event}) => {
    return (
        <div>
            <input type='text' placeholder='Search...' 
            className="search-panel"
            onChange={event}
            value={value}/>
            <button
                onClick={searchText}>
                add
            </button>
        </div>
    );
};

export default SearchPanel;