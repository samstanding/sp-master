import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const MyAppBar = () => (
    <MuiThemeProvider>
  <AppBar
    title="Prime Solo Projects"
    iconElementRight={<FlatButton label="Upload"/>}
  />
  </MuiThemeProvider>
);

export default MyAppBar;