import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ProjectCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <MuiThemeProvider>
                <div>
            {this.props.list.map( (project, index) => (
             <Card key={index}>
             <CardHeader 
             title ={project.title}
             subtitle={`${project.person[0].firstName} ${project.person[0].lastName}`}
             />
              <CardText>
                {project.description}
             </CardText>
             
             <CardActions>
                 <FlatButton label="Github" />
                 <FlatButton label="Heroku" />
             </CardActions>
             </Card>
        ))}
        </div>
        </MuiThemeProvider>
        );
    }
    }
    

export default ProjectCards;