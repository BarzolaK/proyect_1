const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CatalogService{

  constructor(){

  }

  async create(data){
    const newCatalog = await models.Catalog.create(data);
    return newCatalog;
  }
  async find(){
    const rta = await models.Catalog.findAll();
    return rta;
  }

  async findOne(id){
    const catalog = await models.Catalog.findByPk(id);
    if (!catalog) {
      throw boom.notFound('user not found');
    }
    return catalog;
  }

  async update(id, changes){
    const catalog = await this.findOne(id);
    const rta = await catalog.update(changes);
    return rta;
  }

  async delete(id){
    const catalog = await this.findOne(id);
    await catalog.destroy();
    return { id };
  }

}
module.exports = CatalogService;
