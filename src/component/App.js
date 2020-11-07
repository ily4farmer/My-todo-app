import React, { Component } from 'react'
import AppHeader from '../component/AppHeader'
import AddItem from '../component/AddItem'
import AppPanel from '../component/AppPanel'
import SearchPanel from '../component/SearchPanel'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listData: [
        {label: 'One', id: 1},
        {label: 'Two', id: 2},
        {label: 'Free', id: 3},
        {label: 'Four', id: 4}
      ],
      value: '',
      inputValue: ''
    };
  };

  deleteItem = (id) => {
    console.log(id);
    this.setState(({listData}) => {
      // Получение номера элемента массива
      const index = listData.findIndex(el => el.id === id);
      //копирование элементов массива до и после удаленного
      const before = listData.slice(0, index);
      const after = listData.slice(index+1);

      const newArray = [...before, ...after];

      return {
        listData: newArray
      };
      
    });
  };


  //Отслеживание изменений в input
  changeValue = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  addItem() {
    this.setState(({listData, value}) => {
      const newElement = {
        label: value,
        id: listData.length + 1
      };

      const before = listData.slice(0);

      const newArray = [...before, newElement]

      return {
        listData: newArray
      };
    });
  };

  onChange = (e) => {
    e.preventDefault();
    this.addItem();
    this.setState({
      value: ''
    });
  };

  //Поисковая панель
  searchInput = (e) => {
    this.setState({
      inputValue: e.target.value
    });
    console.log(this.state.inputValue);
  };

  
  searchText = () => {
    
  };
      

  render () {
    const {listData, value, inputValue} = this.state;
    
    return (
      <div className="App">
        <AppHeader/>
        <AddItem addItem = {this.onChange}
            value={value}
            changeValue={this.changeValue}/>
        <AppPanel 
          data = {listData}
          deleteItem= {this.deleteItem}/>
        <SearchPanel searchText={this.searchText}
            event = {this.searchInput}
            value={inputValue}/>
      </div>
    );
  }
}

export default App;
