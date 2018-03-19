import React, { Component } from 'react';

class ProjectFrom extends Component {
    constructor(props) {
        super(props);
        
        }
        render() {
            return ( 
                <div>
                <h2>This is where you'll upload a project</h2>
                <form onSubmit={this.props.handleSubmit}>
                <input placeholder="title" onChange={this.props.handleChangeFor('title')} name="title" value={this.props.project.title}/>
                <input placeholder="url to host website" onChange={this.props.handleChangeFor('appHosted')} name="appHosted" value={this.props.project.appHosted}/>
                <input placeholder="second url to host website" onChange={this.props.handleChangeFor('appHosted2')} name="appHosted2" value={this.props.project.appHosted2}/>
                <input placeholder="github" onChange={this.props.handleChangeFor('github')} name="github" value={this.props.project.github}/>
                <textarea placeholder="description" onChange={this.props.handleChangeFor('description')} name="description" value={this.props.project.description}/>
                <input type="submit" value="Submit"/>
                  </form> 
                  </div>
            );
    }
}

export default ProjectFrom;