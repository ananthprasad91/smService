const httpMocks = require('node-mocks-http');
const stroyManagementService = require('../services/stroyManagement.service');
const storyManagementController = require('../controllers/storyManagement.controller');
const { token } = require('../fixtures/token.json');

jest.mock('../services/stroyManagement.service');

describe('storyManagement controller', () => {
  it('getStories', async () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/stories',
    });
    const res = httpMocks.createResponse();
    stroyManagementService.getAllStories.mockResolvedValue([]);
    await storyManagementController.getStories(req, res);
    expect(res.statusCode).toBe(200);
  });

  it('create story ', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/createStory',
      headers: {
        "auth-token": token,
      },
      body: {
        title: 'test',
        storyBody: 'test',
      },
    });
    const res = httpMocks.createResponse();
    stroyManagementService.createStory.mockResolvedValue([]);
    await storyManagementController.createStory(req, res);
    expect(res.statusCode).toBe(201);
  });

  it('delete story ', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/deleteStory',
      headers: {
        "auth-token": token,
      },
      body: {
        storyId: 'test',
      },
    });
    const res = httpMocks.createResponse();
    stroyManagementService.deleteStory.mockResolvedValue([]);
    await storyManagementController.deleteStory(req, res);
    expect(res.statusCode).toBe(200);
  });
});
