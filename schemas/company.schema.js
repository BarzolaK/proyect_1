const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const typeCompany = Joi.string();
const phone = Joi.number().integer().min(10);;
const adress = Joi.string();
const email = Joi.string();
const contactName = Joi.string();
const status = Joi.string();

const createCompanySchema = Joi.object({
  name: name.required(),
  typeCompany: typeCompany.required(),
  phone: phone.required(),
  adress: adress.required(),
  email: email.required(),
  contactName: contactName.required(),
  status: status.required(),
});

const updateCompanySchema = Joi.object({
  name: name,
});

const getCompanySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCompanySchema, updateCompanySchema, getCompanySchema }
