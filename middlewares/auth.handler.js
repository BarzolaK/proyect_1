const boom = require('@hapi/boom');
const { TypeUser } = require('../db/models/typeUser.model');

const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  console.log(req.user);
  const user = req.user;
  if (user.typeUserId === 1) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey, checkAdminRole }
