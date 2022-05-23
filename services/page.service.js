const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');


class PageService{

  constructor(){

   }

  async create(data){
    const newPage = await models.Page.create(data);
    return newPage;
  }

  async find(){
    const pages = await models.Page.findAll();
    return pages;
  }

  async findOne(id){
    const pages = await models.Page.findByPk(id)
    if (!pages){
      throw boom.notFound('page not found');
    }
    return pages;
  }

  async update(id, changes){
    const pages = await this.findOne(id);
    const rta = await pages.update(changes);
    return rta;
  }

  async delete(id){
    const pages = await this.findOne(id);
    await pages.destroy();
    return { id };
  }

}
module.exports = PageService;
