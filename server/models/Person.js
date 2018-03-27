const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const PersonSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

const ProjectSchema = new Schema ({
  person: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  appHosted: String,
  appHosted2: String,
  github: String,
  title: String,
  description: String,
  projectURL: {type: Object, default: { url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/450/s300/prime-20logo-20color.png'}}
})

const UserSchema = new Schema ({
  username: { type: String, required: true},
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  cohort: {type: String, require: true},
  program: {type: String, require: true},
  Admin: {type: Boolean, default: false},
  project: [{type: mongoose.Schema.ObjectId, ref: 'Project'}]
})

module.exports = {
  Person: mongoose.model('Person', PersonSchema),
  Project: mongoose.model('Project', ProjectSchema),
  User: mongoose.model('User', UserSchema)
} 
