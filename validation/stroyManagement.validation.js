const Joi = require('joi')

const myStoriesValidation = (myStoriesData) => {
    const myStoriesSchema = {
        userId: Joi.string()
            .required()
    }
    return Joi.validate(myStoriesData, myStoriesSchema).error
}
const createStoryValidation = (createStoryData) => {
    const createStorySchema = {
        userId: Joi.string()
            .required(),
        title: Joi.string()
            .required(),
        storyBody: Joi.string()
            .required(),
    }
    return Joi.validate(createStoryData, createStorySchema).error
}
const deleteStoryValidation = (deleteStoryData) => {
    const deleteStorySchema = {
        userId: Joi.string()
            .required(),
        storyId: Joi.string()
            .required()
    }
    return Joi.validate(deleteStoryData, deleteStorySchema).error
}

module.exports = {
    createStoryValidation,
    deleteStoryValidation
}