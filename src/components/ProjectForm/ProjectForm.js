import React, { Component } from 'react';
import TextField from 'material-ui-next/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Button from 'material-ui-next/Button';
import ReactFilestack from 'react-filestack';
import Grid from 'material-ui-next/Grid'
// import './ProjectForm.css';

const styles = theme =>  ({
    button: {
      margin: 12,
    },
    imageInput: {
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      opacity: 0,
    },
    textField: {
      marginLeft: theme.spacing.unit*2,
      marginRight: theme.spacing.unit*2,
      width: 200,
    },
    root: {
      flexGrow: 1,
    },
  });

class ProjectFrom extends Component {
        render() {
            return ( 
                <div>
                <h2>This is where you'll upload a project</h2>
                <form onSubmit={this.props.handleSubmit}>
                <div>
                <TextField
                id="title"
                label="project title"
                placeholder="project title"
                className={this.props.textField}
                value={this.props.project.title}
                onChange={this.props.handleChangeFor('title')}
                />
                </div>
                <div>
                <TextField 
                id="textarea"
                label="project description"
                placeholder="What problem does your app solve? What technology did you use? APIs?"
                className={this.props.textField}
                multiline
                rows={4}
                onChange={this.props.handleChangeFor('description')}
                value={this.props.project.description}
                />
                </div>
                <div>
                <TextField
                id="github url"
                label="github url"
                placeholder="github url"
                onChange={this.props.handleChangeFor('github')}
                value={this.props.project.github}
                />
                </div>
                <div>
                <TextField
                id="hosted url"
                label="hosted url"
                placeholder="hosted url"
                onChange={this.props.handleChangeFor('appHosted')}
                value={this.props.project.appHosted}
                />
                </div>
                <div>
                <RaisedButton
                onChange={this.props.handleChangeFor('projectURL')}
                value={this.props.project.projectURL} 
                labelPosition="before"
                containerElement="label"
                label="Upload a screenshot"
                style={styles.button}>
                <ReactFilestack 
                apikey={'Axw9wpmiCSCSKeOsBQCQ4z'} 
                mode={'pick'}
                onSuccess={(response) => {
                    this.props.handleChangeFor('projectURL');
                    this.props.project.projectURL=response.filesUploaded[0];
                    console.log(response);
                } }
                onError={(e) => console.log(e)}
                buttonText={''}
                // buttonClass="fs-button"
                 />
                </RaisedButton>
                </div>
                <Button
                variant="raised"
                type="submit" 
                label="submit"
                color="primary">
                Submit</Button>
                  </form> 
                  </div>
            );
    }
}

export default ProjectFrom;