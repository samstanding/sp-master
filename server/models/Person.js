const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const PersonSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  project: {type: mongoose.Schema.ObjectId, ref: 'Project'}
});

const ProjectSchema = new Schema ({
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  cohort: {type: String, require: true}, 
  heroku: String,
  github: String,
  title: String,
  description: String,
  Admin: {type: Boolean, default: false},
})

module.exports = {
  Person: mongoose.model('Person', PersonSchema),
  Project: mongoose.model('Project', ProjectSchema),
} 
