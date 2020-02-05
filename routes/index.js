const express = require('express')
const router = express.Router()
const { auth } = require('./apiAuth')
const storyManagementController = require('../controllers/storyManagement.controller')

router.post('/createStory', auth, storyManagementController.createStory)
router.post('/deleteStory', auth, storyManagementController.deleteStory)
router.get('/stories', auth, storyManagementController.getStories)
router.get('/myStories', auth, storyManagementController.getMyStories)

module.exports = router
