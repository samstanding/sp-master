import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import './SearchBar.css';

 
// const styles = {

//   control: {
//     border: '2rem',
//     padding: '25px 15px'
//   }
// }


class SearchBar extends Component {
render() {
  return(
    <div className="Search">
      {/* <fieldset className="form-group"> */}
      <div className="SearchInput">
      <form onSubmit={this.props.handleSubmit}>
      <TextField  
        hintText='search'
        value={this.props.searchText}
        onChange={this.props.onChange}
      />
      </form>
      </div>
      {/* </fieldset> */}
      </div>
  )
}
}

export default SearchBar;