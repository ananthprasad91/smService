const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/keys')

const getUserId = (authToken) => {
    const userId = jwt.decode(authToken)._id
    console.log(userId)
    return userId
}

module.exports = {
  getUserId
}