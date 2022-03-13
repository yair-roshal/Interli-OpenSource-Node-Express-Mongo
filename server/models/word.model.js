const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wordSchema = new Schema({
  username: {type: String, required: true},
  description: {type: String, required: true},
  translation: {type: String, required: true},
  date: {type: Date, required: true},
}, {
  timestamps: true,
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;