const express = require('express');

const productsRouter = require('./products.router');
const catalogsRouter = require('./catalogs.router');
const usersRouter = require('./userscompany.router');
const companiesRouter = require('./companies.router');
const typeUserRouter = require('./typeUser.router');
const pageRouter = require('./page.router');
const authRouter = require('./auth.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/catalogs', catalogsRouter)
  router.use('/userscompany', usersRouter);
  router.use('/companies', companiesRouter);
  router.use('/typeUser', typeUserRouter);
  router.use('/pages', pageRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
