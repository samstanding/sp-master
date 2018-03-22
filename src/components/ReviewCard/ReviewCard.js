import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ReviewCard extends Component {
  
    render() {
        return ( 
            <MuiThemeProvider>
            
             <Card>
             <CardHeader 
             title ={this.props.project.title}
             subtitle={`${this.props.project.person[0].firstName} ${this.props.project.person[0].lastName}`}
             />
              <CardText>
                {this.props.project.description}
             </CardText>
             
             <CardActions>
                 <FlatButton label="Github" />
                 <FlatButton label="Heroku" />
             </CardActions>
             </Card>
        </MuiThemeProvider>
        );
    }
    }
    

export default ReviewCard;