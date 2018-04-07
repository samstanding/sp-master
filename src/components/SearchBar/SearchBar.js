import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import './SearchBar.css';



class SearchBar extends Component {
render() {
  return(
    <div className="Search">
      <form className="SearchForm" onSubmit={this.props.handleSubmit}>
      <TextField 
        className="SearchInput" 
        underlineStyle={{color: '#00cc7a'}}
        hintText='search'
        value={this.props.searchText}
        onChange={this.props.onChange}
      />
      </form>
      </div>
  )
}
}

export default SearchBar;