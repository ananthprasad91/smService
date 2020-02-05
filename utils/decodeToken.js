const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/keys')

const getUserId = (authToken) => {
    const userId = jwt.decode(authToken)._id
    console.log(userId)
    return userId
}

const signUserId = (userId) => {
    const res = jwt.sign({ _id: userId }, SECRET, { expiresIn: '1d' })
    return res
}

module.exports = {
  getUserId
}