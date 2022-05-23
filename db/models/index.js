const { User, UserSchema } = require('./usersCompany.model');
const { Catalog, CatalogSchema } = require('./catalog.model');
const { Company, CompanySchema } = require('./company.model');
const { TypeUser, TypeUserSchema } = require('./typeUser.model');
const { Product, ProductSchema } = require('./product.model');
const { Page, PageSchema } = require('./page.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Catalog.init(CatalogSchema, Catalog.config(sequelize));
  Company.init(CompanySchema, Company.config(sequelize));
  TypeUser.init(TypeUserSchema, TypeUser.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Page.init(PageSchema, Page.config(sequelize));

  TypeUser.associate(sequelize.models);
  User.associate(sequelize.models);
  Company.associate(sequelize.models);
}

module.exports = setupModels;
