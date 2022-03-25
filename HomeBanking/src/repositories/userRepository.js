const User = require('../models/users');

const create = async (body) => {
  const user = new User({
    email: body.email,
    password: body.password
  })
  await user.save();
  return user
}

module.exports = {
  create,
}