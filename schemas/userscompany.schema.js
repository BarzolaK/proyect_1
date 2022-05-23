const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const companyId = Joi.number().integer();
const typeUserId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  typeUserId: typeUserId.required(),
  companyId: companyId.required(),
});

const updateUserSchema = Joi.object({
  email,
  password: password,
  typeUserId,
  companyId,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const queryUserSchema = Joi.object({
  limit,
  offset
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, queryUserSchema }
