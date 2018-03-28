import React, { Component } from 'react';
// 
 
class SearchBar extends Component {
render() {
  return(
    <div>
      <form onSubmit={this.props.handleSubmit}>
        
        <input type="text" className="form-control form-control-lg" placeholder="Search" 
        value={this.props.searchText}
        onChange={this.props.onChange}
      />
      <input type="submit" label="submit"/>
      </form>
      </div>
  )
}
}

export default SearchBar;