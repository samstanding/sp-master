const express = require('express');

const Person = require('../models/Person').Person;
const Project = require('../models/Person').Project;
const User = require('../models/Person').User;

const router = express.Router();

router.post('/:username', (req,res) => {
    let username = req.params.username;
    console.log(req.body);
    console.log(username);
        let newProject = new Project (req.body.project);
        newProject.save((error, savedProject) => {
            if (error) {
                console.log('error on project post:', error);
            } else {
                User.findOneAndUpdate(
                    {"username": username}, 
                    {$push: {project: savedProject._id}},
                    (pusherror, doc) => {
                        if (pusherror) {
                            console.log('error on pushing project to Person:', pusherror);
                            res.sendStatus(500);
                        } else {
                            Project.findOneAndUpdate(
                                {"_id": savedProject._id}, 
                                {$push: {person: doc._id}},
                                (projectpusherror, projectDoc)=> {
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
                )}
        })
    }
)

router.get('/', (req, res) => {
    Project.find({}).populate('person').exec((error, foundProjects) => {
        if(error) {
            console.log('error on get: ', error);
            res.sendStatus(500);
        } else {
            res.send(foundProjects);
        }
    })
});

router.get('/:username', (req, res) => {
    let username = req.params.username;
    User.findOne({"username": username}).populate('project').exec((error, foundUser) => {
        if(error) {
            console.log('error on get user project', error);
            res.sendStatus(500);
        } else {
            console.log(foundUser);
            res.send(foundUser);
        }
    })
})

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    let id = req.params.id;
    let editedProject = req.body;
    Project.findByIdAndUpdate(
    {"_id": id},
    {$set: editedProject},
    (error, updatedProject) => {
        if(error) {
            console.log('error on editing projecting', error);
            res.sendStatus(500);
        } else {
            console.log(updatedProject);
            res.sendStatus(200);
        }
    })
})


module.exports = router;