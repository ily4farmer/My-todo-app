import React from 'react'
import AppPanelItem from '../AppPanelItem'

import './AppPanel.css'

const AppPanel = ({data, deleteItem}) => {
    
    const element = data.map((el) =>
    <AppPanelItem 
        label = {el.label}
        key={el.id}
        deleteItem={() => deleteItem(el.id)}/>
  );
   
    return (
        <div className = 'app-panel'>
            <ul>
                {element}
            </ul>
        </div>
    )
}

export default AppPanel;