const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const PersonSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  project: {type: mongoose.Schema.ObjectId, ref: 'Project'},
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  cohort: {type: String, require: true},
  program: {type: String, require: true},
  Admin: {type: Boolean, default: false}
});

const ProjectSchema = new Schema ({
  user: {type: mongoose.Schema.ObjectId, ref: 'Person'},
  appHosted: String,
  appHosted2: String,
  github: String,
  title: String,
  description: String,
})

module.exports = {
  Person: mongoose.model('Person', PersonSchema),
  Project: mongoose.model('Project', ProjectSchema)
} 
