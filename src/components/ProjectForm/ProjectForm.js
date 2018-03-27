import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ReactFilestack from 'react-filestack';
import './ProjectForm.css';

const styles = {
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
  };

class ProjectFrom extends Component {
        render() {
            return ( 
                <div>
                <h2>This is where you'll upload a project</h2>
                <form onSubmit={this.props.handleSubmit}>
                <div>
                <TextField
                hintText="title"
                floatingLabelText="title"
                value={this.props.project.title}
                onChange={this.props.handleChangeFor('title')}
                />
                </div>
                <div>
                <TextField 
                hintText="description"
                floatingLabelText="description"
                multiLine={true}
                rows={2}
                onChange={this.props.handleChangeFor('description')}
                value={this.props.project.description}
                />
                </div>
                <div>
                <TextField
                hintText="github URL"
                floatingLabelText="github URL"
                onChange={this.props.handleChangeFor('github')}
                value={this.props.project.github}
                />
                </div>
                <div>
                <TextField
                hintText="hosted URL"
                floatingLabelText="hosted URL"
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
                label="Upload a screenshot of your project"
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
                buttonClass="fs-button"
                 />
                </RaisedButton>
                </div>
                <RaisedButton
                type="submit" 
                label="submit"
                primary={true}/>
                  </form> 
                  </div>
            );
    }
}

export default ProjectFrom;