import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui-next/Button';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    box: {
        height: '128px',
    },
    icon: {
        color: 'white',
    },
}

const MyAppBar = () => (
    <div>
  <AppBar
    style={{position: "absolute", paddingtop: 0, backgroundColor: '#6eb69d',}}
    title="Prime Solo Projects"
    iconElementLeft=
    {
    <Link to="/home">
    <IconButton style ={styles.icon}>
    <ActionHome />
    </IconButton>
    </Link>  
    }
    iconElementRight=
    {
    
   
    <Button label="Upload"
    component= {Link} to="/login" > 
    Upload
    </Button>
    }
  />
  <div style={styles.box}> </div>
</div>
  
);

export default MyAppBar;