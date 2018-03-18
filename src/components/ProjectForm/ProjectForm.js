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
                <input placeholder="first name" onChange={this.props.handleChangeFor('firstName')} name="firstName" value={this.props.project.firstName} />
                <input placeholder="last name" onChange={this.props.handleChangeFor('lastName')} name="lastName" value={this.props.project.lastName} />
                <input placeholder="cohort" onChange={this.props.handleChangeFor('cohort')} name="cohort" value={this.props.project.cohort}/>
                <input placeholder="heroku" onChange={this.props.handleChangeFor('heroku')} name="heroku" value={this.props.project.heroku}/>
                <input placeholder="github" onChange={this.props.handleChangeFor('github')} name="github" value={this.props.project.github}/>
                <input placeholder="title" onChange={this.props.handleChangeFor('title')} name="title" value={this.props.project.title}/>
                <input placeholder="description" onChange={this.props.handleChangeFor('description')} name="description" value={this.props.project.description}/>
                <input type="submit" value="Submit"/>
                  </form> 
                  </div>
            );
    }
}

export default ProjectFrom;