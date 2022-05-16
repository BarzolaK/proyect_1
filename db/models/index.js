const { User, UserSchema } = require('./user.model');
const { Catalog, CatalogSchema } = require('./catalog.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Catalog.init(CatalogSchema, Catalog.config(sequelize));
}

module.exports = setupModels;
