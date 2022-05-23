const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const parentId = Joi.number().integer();
const path = Joi.string();
const image = Joi.string();

const createPageSchema = Joi.object({
  name: name.required(),
  parentId,
  path: path.required(),
  image: image.required(),
});

const updatePageSchema = Joi.object({
  name: name,
  path: path,
});

const getPageSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPageSchema, updatePageSchema, getPageSchema }
