const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: String,
    name: String,
    postId: String,
    caption: String
})

module.exports = mongoose.model('post', postSchema)