const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    message: String
})

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    is_published: Boolean,
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    comments: [CommentSchema]
})

/**
 * {
 *  title: "Post 1",
 *  body: "Post 1 body",
 *  comments: []
 * }
 */

//model for comment
const Comment = mongoose.model("comment", CommentSchema)

const Post = mongoose.model("Post", PostSchema)

module.exports = {
    Post,
    Comment
}