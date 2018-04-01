import React, {Component} from 'react';
import Button from 'material-ui-next/Button';
import { Link } from 'react-router-dom';
import Grid from 'material-ui-next/Grid'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button : {
        padding: theme.spacing.unit*2,
        alignContent: 'center',
    }
})


class ReviewButtons extends Component {
    render() {
        return (
            <div className={this.props.root}>
            <Grid container item xs={12} justify="space-around">
        
            <Grid  className={this.props.button}>
            <Button 
            variant="raised"
            component={Link} to="/home"
            label="Look's great. Submit!" 
            color="primary" >
            Look's great. Submit!
            </Button>
            </Grid>
            <Grid  className={this.props.button}>
            <Button
            variant="raised"
            component={Link} to="/edit"
            label="Nope! I need to make a change"
            color="secondary">
            Nope! I need to make a change
            </Button>
            </Grid>
            </Grid>
            </div>
        )
    }
}

export default ReviewButtons;