const Story = require('../models/Story')

async function getAllStories() {
  try {
    return Story.find().sort( { createdDate: -1 } )
  } catch (e) {
    throw e
  }
}

async function getMyStories(userId) {
  try {
    return Story.find({ userId: userId }).sort( { createdDate: -1 } )
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
    return Story.deleteOne(storyObj)
  } catch (e) {
    throw e
  }
}

module.exports = {
  getAllStories,
  getMyStories,
  createStory,
  deleteStory
}
