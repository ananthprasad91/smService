/* eslint-disable strict */
const storyManagementService = require("../services/stroyManagement.service")
const storyValidation = require('../validation/stroyManagement.validation')
const { ObjectId } = require('mongoose').Types

async function getStories(req, res) {

  try {
    //Get All Stories
    const stories = await storyManagementService.getAllStories()
    return res.status(200)
      .send({ stories })
  } catch (e) {
    return res.status(500)
      .send(e)
  }
}

async function createStory(req, res) {
  const { userId, title, storyBody } = req.body

  try {
    //Validate Request Data
    const error = storyValidation.createStoryValidation(req.body)
    if(error) {
      res.status(400).send({ message: error.details[0].message })
    }
    //Create New Story
    const story = await storyManagementService.createStory({
      userId,
      title,
      storyBody
    })
    return res.status(201)
      .send({ storyId: story._id })
  } catch (e) {
    res.status(500).send(e)
  }
}

async function deleteStory(req, res) {

  const { userId } = req.body
  const _id = req.body.storyId

  try {
    //Validate Request Data
    const error = storyValidation.deleteStoryValidation(req.body)
    if(error) {
      res.status(400).send({ message: error.details[0].message })
    }
    //Create New Story
    const story = await storyManagementService.deleteStory({
      userId,
      _id
    })
    return res.status(200)
      .send({ message: "Deleted Succesfully" })
  } catch (e) {
    res.status(500).send(e)
  }
}

async function resourceNotFound(req, res) {

  try {
    //Default Route
    return res.status(404)
      .send({ message: "Resources your looking for is not available" })
  } catch (e) {
    res.status(500).send(e)
  }
}

async function accessDenied(req, res) {

  try {
    //Access Denied
    return res.status(401)
      .send({ message: "You're not auhtorized. Please check API end point" })
  } catch (e) {
    res.status(500).send(e)
  }
}


module.exports = {
  getStories,
  createStory,
  deleteStory,
  resourceNotFound,
  accessDenied
}
