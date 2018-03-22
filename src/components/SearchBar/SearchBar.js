import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
class Search extends Component {
render() {
  return(
      <MuiThemeProvider>
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        position: "fixed",
        margin: '40',
        maxWidth: 400,
      }}
    />
    </MuiThemeProvider>
  )
}
}

export default Search;