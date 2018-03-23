import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    box: {
        height: '128px',
    },
}

const MyAppBar = () => (
    <div>
  <AppBar
    style={{position: "fixed", paddingtop: 0}}
    title="Prime Solo Projects"
    iconElementLeft=
    {
    <Link to="/home">
    <IconButton>
    <ActionHome />
    </IconButton>
    </Link>  
    }
    iconElementRight=
    {
    <Link to="/login"> 
    <FlatButton label="Upload"/> 
    </Link>
    }
  />
  <div style={styles.box}> </div>
</div>
  
);

export default MyAppBar;