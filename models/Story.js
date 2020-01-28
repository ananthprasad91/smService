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
    }
})

const Story = mongoose.model('Story', StorySchema)

module.exports = Story