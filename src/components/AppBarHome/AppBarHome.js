import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui-next/Button';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Search from '../SearchBar/SearchBar';

const styles = {
    box: {
        height: '128px',
    },
}

const AppBarHome = () => (
    <div>
  <AppBar
    style={{backgroundColor: '#00cc99', position: "fixed", paddingtop: 0, flexWrap: 'wrap', display: 'flex', flexDirection: 'row'}}
    title={<Search />}
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
    <Button label="Upload"/> 
    </Link>
    }
  />
  <div style={styles.box}> </div>
</div>
  
);

export default AppBarHome;