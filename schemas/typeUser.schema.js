const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();

const createTypeUserSchema = Joi.object({
  name: name.required(),
});

const updateTypeUserSchema = Joi.object({
  name: name,
});

const getTypeUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTypeUserSchema, updateTypeUserSchema, getTypeUserSchema }
