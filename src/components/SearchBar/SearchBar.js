import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

 
class Search extends Component {
render() {
  return(
    <SearchBar
      onChange={() => console.log()}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        position: "fixed",
        margin: '40',
        maxWidth: 400,
      }}
    />
  )
}
}

export default Search;