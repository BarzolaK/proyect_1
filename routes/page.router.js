const express = require('express');

const PageService = require('./../services/page.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createPageSchema, updatePageSchema, getPageSchema} = require('./../schemas/page.schema')


const router = express.Router();
const service = new PageService();

router.get('/', async (req, res, next ) => {
  try {
  const pages = await service.find();
  res.json(pages);
  }catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getPageSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const pages = await service.findOne(id);
    res.json(pages);
  }catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createPageSchema, 'body'),
async (req, res, next) => {
  try {
  const body = req.body;
  const newPage = await service.create(body)
  res.status(201).json(newPage);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
validatorHandler(getPageSchema, 'params'),
validatorHandler(updatePageSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const pages = await service.update(id, body);
    res.json(pages);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
