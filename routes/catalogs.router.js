const express = require('express');

const CatalogService = require('./../services/catalog.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createCatalogSchema, updateCatalogSchema, getCatalogSchema} = require('./../schemas/catalog.schema')

const router = express.Router();
const service = new CatalogService();

router.get('/', async (req, res, next) => {
  try {
  const catalogs = await service.find();
  res.json(catalogs);
}catch (error) {
  next(error);
}
});

router.get('/:id',
validatorHandler(getCatalogSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const catalogs = await service.findOne(id);
    res.json(catalogs);
  }catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createCatalogSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const newCatalog = await service.create(body)
    res.status(201).json(newCatalog);
  } catch (error) {
  next(error);
  }
});

router.patch('/:id',
validatorHandler(getCatalogSchema, 'params'),
validatorHandler(updateCatalogSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const catalogs = await service.update(id, body);
    res.json(catalogs);
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
