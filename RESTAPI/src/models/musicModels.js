const mongoose = require('mongoose');

const MusicSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: String, required: true },
  rating: { type: String },
});

module.exports = mongoose.model('Music', MusicSchema);
