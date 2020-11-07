import React, { Component } from 'react';
import './AppPanelItem.css';

export default class AppPanelItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textDecoration: false,
            bold: false
        };
    };

    textDecor() {
        this.setState({
            textDecoration: !this.state.textDecoration
        });
    };

    bold() {
        this.setState({
            bold: !this.state.bold
        });
    };
    render () {
        const {label, deleteItem} = this.props;
        const {textDecoration, bold} = this.state;

        let classNames = 'app-panel-item__span';

        //Подчеркивание текста
        if (textDecoration) {
            classNames += ' decoration';
        };

        // Выделение текста
        if (bold) {
            classNames += ' bold'
        }

        return (
            <li className ='app-panel-item'>
               <span className={classNames}
                    onClick={this.textDecor.bind(this)}>{label}</span>
               
               <button className='app-panel-item__button'
                    onClick={this.bold.bind(this)}>!</button>
               <button className='app-panel-item__button'
                    onClick={deleteItem}>X</button>
               
           </li>
        );
    };
 
};

