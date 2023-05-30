import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;

    return (
      <div>
        <input
          className='search-box'
          type='search'
          placeholder='search monster'
          onChange={onSearchChange}
          />
      </div>
    )
  }
};

export default SearchBox;