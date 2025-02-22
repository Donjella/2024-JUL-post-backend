const { Post } = require("../models/post")

async function getPosts() {
    const posts = await Post.find()
    return posts
}

async function getPost(postId) {
    const post = await Post.findById(postId)
    // const post = await Post.find({ _id: postId })[0]
    return post
}

async function createPost(post) {
    const newPost = await Post.create(post)
    return newPost
}

async function updatePost(postId, post, userId) {
    const postToUpdate = await Post.findById(postId)
    if (postToUpdate.user_id.toString() !== userId) {
        return { error: "Not allowed to perform this action" }
    }
    const updatedPost = await Post.findByIdAndUpdate(postId, post, { new: true })
    return updatedPost
}

async function deletePost(postId) {
    const deletedPost = await Post.findByIdAndDelete(postId)
    return deletedPost
}

// named exports
module.exports = {
    getPosts, // key and value are the same "getPosts": getPosts, so we can just write getPosts
    getPost,
    createPost,
    updatePost,
    deletePost
}