import React, { Component } from 'react';
import './App.css';
// Components
import CardList from './Components/card-list/card-list.component.jsx';
import SearchBox from './Components/search-box/seach-box.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  onSearchChange = (e) => {
      const searchField = e.target.value.toLowerCase();
      this.setState(() => {
        return { searchField }
      });
    }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox onSearchChange={onSearchChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }


}

export default App;
