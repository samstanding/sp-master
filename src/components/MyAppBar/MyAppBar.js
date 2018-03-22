import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import { Link } from 'react-router-dom';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },

}; 

function MyAppBar (props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
            Prime Solo Projects
            </Typography>
            <Link to="/login">
            <RaisedButton color="inherit"> Upload Your Project! </RaisedButton>
            </Link>
            </Toolbar>
            </AppBar>
            </div>
    )
}

AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (MyAppBar);