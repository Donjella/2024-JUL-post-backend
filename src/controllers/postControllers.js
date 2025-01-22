const posts = [
    {
        title: "Post 1",
        body: "Post 1 body",
        is_published: true
    },
    {
        title: "Post 2",
        body: "Post 2 body",
        is_published: false
    }
]

function getPosts() {
    return posts
}

// named exports
module.exports = {
    getPosts // key and value are the same getPosts: getPosts, so we can just write getPosts
}