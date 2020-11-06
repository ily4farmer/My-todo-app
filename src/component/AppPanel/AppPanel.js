import React from 'react'
import AppPanelItem from '../AppPanelItem'

import './AppPanel.css'

const AppPanel = () => {
    return (
        <div className = 'app-panel'>
            <ul>
                <AppPanelItem/>
                <AppPanelItem/>
            </ul>
        </div>
    )
}

export default AppPanel;