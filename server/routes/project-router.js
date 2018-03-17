const express = require('express');

const Person = require('../models/Person').Person;
const Project = require('../models/Person').Project;

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
                            console.log('updated person with project:', doc);
                            res.sendStatus(200);
                        }
                    }
                )
            }
        })
    }
)

module.exports = router;