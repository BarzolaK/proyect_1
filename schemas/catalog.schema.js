const Joi = require('joi');

const id = Joi.string();
const table = Joi.string();
const value = Joi.number().integer();
const status = Joi.string();

const createCatalogSchema = Joi.object({
  table: table.required(),
  value: value.required(),
  status: status.required(),
});

const updateCatalogSchema = Joi.object({
  table: table,
  value: value,
});

const getCatalogSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCatalogSchema, updateCatalogSchema, getCatalogSchema }
