const { default: mongoose } = require("mongoose")
const mongodb = require("mongoose")

const CategorySchema = mongoose.Schema({
    title: String,
    description: String
}, {
    collection:"categories"
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category