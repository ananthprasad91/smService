const Story = require('../models/Story');
const stories = require('../fixtures/stories.json');
const stroyManagement = require('../services/stroyManagement.service');
const mockingoose = require('mockingoose').default;

describe('StoryMangementService', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return all stories', async () => {

        mockingoose(Story).toReturn(stories, 'find');
        const response = await stroyManagement.getAllStories();
        expect(JSON.stringify(response)).toBe(JSON.stringify(stories));

    });


    it('should throw error in create new story when no storyBody and title is passed', async () => {
        mockingoose(Story).toReturn({ _id: '123' }, 'save');
        await expect(stroyManagement.createStory()).rejects.toThrow();
    });

    it('should create new story', async () => {
        const spy = jest.spyOn(Story.prototype, 'save');
        mockingoose(Story).toReturn({}, 'save');
        const response = await stroyManagement.createStory({
            userId: '123',
            title: 'test',
            storyBody: 'test'
        });
        expect(response).toHaveProperty('_id');
        expect(spy).toHaveBeenCalled();

    });

    it('should throw error in delete story when object is passed', async () => {

        mockingoose(Story).toReturn(new Error('rm error'), 'deleteOne');
        await expect(stroyManagement.deleteStory()).rejects.toThrow();
    });

    it('should remove story', async () => {
        mockingoose(Story).toReturn({ userId: '123' }, 'deleteOne');
        const response = await stroyManagement.deleteStory({
            userId: '123',
        });
        expect(response).toHaveProperty('_id');

    });
    

});