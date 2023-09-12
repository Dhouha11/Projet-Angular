const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {type: String, required: true},
    contenu: {type: String, required: true}
  });

const post = mongoose.model('Posts', PostSchema);

module.exports = post;
