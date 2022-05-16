const express = require('express');

const productsRouter = require('./products.router');
const catalogsRouter = require('./catalogs.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/catalogs', catalogsRouter)
  router.use('/users', usersRouter);
//  app.use('/categories', productsRouter);
}

module.exports = routerApi;
