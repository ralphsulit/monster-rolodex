import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => 
        this.setState(() => {
          return { monsters: users }
        },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  onSearchChange = (event) => {
      const searchField = event.target.value.toLowerCase();
      this.setState(() => {
        return {searchField}
      });
    }

  
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });


    return (
      <div>
        <input
          className='search-box'
          type='search'
          placeholder='search monster'
          onChange={onSearchChange}
          />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
