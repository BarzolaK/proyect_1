const express = require('express');
const passport = require('passport');

const TypeUserService = require('./../services/typeuser.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { checkAdminRole }= require('./../middlewares/auth.handler')
const {createTypeUserSchema, updateTypeUserSchema, getTypeUserSchema} = require('./../schemas/typeUser.schema')

const router = express.Router();
const service = new TypeUserService();

router.get('/', async (req, res, next) => {
  try {
  const typeUser = await service.find();
  res.json(typeUser);
}catch (error) {
  next(error);
}
});

router.get('/:id',
validatorHandler(getTypeUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const typeUser = await service.findOne(id);
    res.json(typeUser);
  }catch (error) {
    next(error);

  }
});

router.post('/',
passport.authenticate('jwt', {session: false}),
checkAdminRole,
validatorHandler(createTypeUserSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const newTypeUser = await service.create(body)
    res.status(201).json(newTypeUser);
  } catch (error) {
  next(error);
  }
});

router.patch('/:id',
validatorHandler(getTypeUserSchema, 'params'),
validatorHandler(updateTypeUserSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const typeUser = await service.update(id, body);
    res.json(typeUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
