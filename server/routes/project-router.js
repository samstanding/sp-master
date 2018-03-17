const express = require('express');

const Person = require('../models/Person').Person;
const Project = require('../models/Person').Project;

const router = express.Router();

router.post('/:id', (req,res) => {
    let id = req.params.id;
    if(req.isAuthenticated()) {
        let newProject = new Project (req.body);
        newProject.save((error, savedProject) => {
            if (error) {
                console.log('error on project post:', error);
            } else {
                Person.findByIdAndUpdate(
                    {"_id": id}, 
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
    } else {
        res.sendStatus(403);
    }
})