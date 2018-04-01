import React, { Component } from 'react';
import TextField from 'material-ui-next/TextField';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui-next/Button';
import ReactFilestack from 'react-filestack';
import Grid from 'material-ui-next/Grid'
import './ProjectForm2.css';


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
    extra: {
      flexGrow: 2,
    }
  });

class ProjectFrom extends Component {
        render() {
            return ( 
                <Grid className={this.props.root}>
                <Grid container className={this.props.root} justify="center" item xs={11}>
                <h2>Upload Your Project</h2>
                </Grid>
                <form onSubmit={this.props.handleSubmit}>
                <Grid container className={this.props.root} justify="center" item xs={12}>
                <Grid item xs={2}>
                <TextField
                id="title"
                label="project title"
                placeholder="project title"
                className={this.props.textField}
                value={this.props.project.title}
                required={true}
                onChange={this.props.handleChangeFor('title')}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                id="github url"
                label="github url"
                placeholder="github url"
                onChange={this.props.handleChangeFor('github')}
                value={this.props.project.github}
                />
                </Grid>
                </Grid>
                <Grid container className={this.props.extra} justify="center" item xs={12}>
                <Grid item xs={2}>
                <TextField 
                id="textarea"
                label="project description"
                placeholder="What problem does your app solve? What technology did you use? APIs?"
                className={this.props.textField}
                required={true}
                multiline
                rows={4}
                onChange={this.props.handleChangeFor('description')}
                value={this.props.project.description}
                />
                </Grid>
                <Grid item xs={2}>
                <TextField
                id="hosted url"
                label="hosted url"
                placeholder="hosted url"
                onChange={this.props.handleChangeFor('appHosted')}
                value={this.props.project.appHosted}
                />
                <br/>
                <br/>
                <FlatButton
                onChange={this.props.handleChangeFor('projectURL')}
                value={this.props.project.projectURL} 
                labelPosition="before"
                containerElement="label"
                label={`Upload a screenshot`}
                style={this.props.button}
                
               
                >
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
                buttonClass="fs-button"
                 />
                </FlatButton>
                </Grid>
                </Grid>
                <br/>
                <Grid container className={this.props.root} justify="center" item xs={12}>
                <Grid item xs={2}>
                <Button
                variant="raised"
                type="submit" 
                label="submit"
                color="primary">
                Submit</Button>
                </Grid>
                <Grid item xs={2}>
                <Button 
                variant="raised"
                onClick={this.props.logout}
                label="log out">
                Log out
                </Button>
                </Grid>
                </Grid>
                  </form> 
                  </Grid>
            );
    }
}

export default ProjectFrom;