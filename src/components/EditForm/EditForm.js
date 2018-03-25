import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditForm extends Component {
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
                <RaisedButton
                type="submit" 
                label="submit"
                primary={true}/>
                  </form> 
                  </div>
            );
    }
}

export default EditForm;