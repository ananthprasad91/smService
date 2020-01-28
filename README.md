# Story Management API

Run the application using "npm run start"
## Runs in pre-configured port 5000

## API Testing For Protected Routes
1) Add new key 'auth-token' in the header
2) Set 'auth-token' value as json web token from login route (hostName/api/um/login)

## Default Endpoint For Story Mangement

hostName/api/sm

## hostName/api/sm/createStory

Create a new story for the current user
Sample Request:
{
    "userId": "5e29ffd689cb473db4fc43bf",
    "title": "Story",
    "storyBody": "This ia a test story"
}

## hostName/api/sm/stories

Get All Stories From DB

## hostName/api/sm/deleteStory

To get json web token as response if the user is valid

Sample Request:
{
    "storyId": "5e2a006d00f9a8325cd3f363",
    "userId": "5e29ffd689cb473db4fc43bf"
}