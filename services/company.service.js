const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CompanyService{

  constructor(){

  }

  async create(data){
    const newCompany = await models.Company.create(data);
    return newCompany;
  }
  async find(){
    const rta = await models.Company.findAll();
    return rta;
  }

  async findOne(id){
    const company = await models.Company.findByPk(id, {
      include: ['userscompany']
    });
    if (!company) {
      throw boom.notFound('company not found');
    }
    return company;
  }

  async update(id, changes){
    const company = await this.findOne(id);
    const rta = await company.update(changes);
    return rta;
  }

  async delete(id){
    const company = await this.findOne(id);
    if (company) {
      await company.destroy();
      return { id };
    }

  }

}
module.exports = CompanyService;
