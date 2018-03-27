const express = require('express');

const Person = require('../models/Person').Person;
const Project = require('../models/Person').Project;
const User = require('../models/Person').User;

const router = express.Router();

router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('user info on post:', req.user);
        let username = req.user.username;
        let newProject = new Project(req.body.project);
        newProject.save((error, savedProject) => {
            if (error) {
            console.log('error on project post:', error);
        } else {
            User.findOneAndUpdate({
                    "username": username
                }, {
                    $push: {
                        project: savedProject._id
                    }
                },
                (pusherror, doc) => {
                    if (pusherror) {
                        console.log('error on pushing project to Person:', pusherror);
                        res.sendStatus(500);
                    } else {
                        Project.findOneAndUpdate({
                                "_id": savedProject._id
                            }, {
                                $push: {
                                    person: doc._id
                                }
                            },
                            (projectpusherror, projectDoc) => {
                                if (projectpusherror) {
                                    console.log('error pushing user onto Project ', projectpusherror);
                                    res.sendStatus(500);
                                } else {
                                    // console.log(savedProject);
                                    res.sendStatus(200);
                                }
                            })
                    }
                }
            )
        }
    })
    }
    else {
        res.sendStatus(403);
    }
})

router.get('/', (req, res) => {
    console.log('user info on all projects get: ', req.user);
    Project.find({}).populate('person').exec((error, foundProjects) => {
        if (error) {
            console.log('error on get: ', error);
            res.sendStatus(500);
        } else {
            res.send(foundProjects);
        }
    })
});

router.get('/userproject', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('user info on review ', req.user);
    let username = req.user.username;
    User.find({"username": username}).populate('project').exec((error, foundUser) => {
        if (error) {
            console.log('error on get user project', error);
            res.sendStatus(500);
        } else {
            console.log('found user project: ', foundUser[0].project[0]);
            res.send(foundUser);
        }
    })
    }
    else {
        res.sendStatus(403);
    }
})

router.put('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log(' ------------- user info on edit: ', req.user, '------------ project to edit: ', req.body);
        let id = req.body.project._id;
        let editedProject = req.body;
        Project.find({"_id": id}, 
        (error, project) => {
            if (error) {
                console.log('error on editing project', error);
                res.sendStatus(500);
            } else {
                console.log('project: ', project[0]);
                project = project[0];
                project.appHosted = req.body.project.appHosted;
                project.github = req.body.project.github;
                project.title = req.body.project.title;
                project.description = req.body.project.description;
                project.projectURL = req.body.project.projectURL;
                project.save( (error, updatedProject) => {
                    if(error) {
                        console.log('error after update: ', error);
                        res.sendStatus(500);
                    } else {
                        console.log('updated Project: ',updatedProject);
                        
                    }
                } )//end project save
                res.sendStatus(200);
                // console.log('edited project: ', updatedProject);
            } 
        })
    } else {
        res.sendStatus(403);
    }
    
});


module.exports = router;