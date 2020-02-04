const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    storyBody: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: () => new Date(+new Date() + 7*24*60*60*1000)
    }
})

const Story = mongoose.model('Story', StorySchema)

module.exports = Story