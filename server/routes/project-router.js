const express = require('express');

const Person = require('../models/Person').Person;
const Project = require('../models/Person').Project;
const UserInfo = require('../modules/person-no-pw');

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
                Person.findOneAndUpdate(
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
            console.log(foundProjects);
            res.send(foundProjects);
        }
    })
});



module.exports = router;