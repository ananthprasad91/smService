const Story = require('../models/Story')
async function getAllStories(email) {
  try {
    return Story.find().sort( { createdDate: -1 } )
  } catch (e) {
    throw e
  }
}

async function createStory(storyObj) {
  try {
    const newStory = new Story(storyObj)
    return newStory.save()
  } catch (e) {
    throw e
  }
}

async function deleteStory(storyObj) {
  try {
    return Story.find(storyObj).remove()
  } catch (e) {
    throw e
  }
}

module.exports = {
  getAllStories,
  createStory,
  deleteStory
}
