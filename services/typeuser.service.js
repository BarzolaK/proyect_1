const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class TypeUserService{

  constructor(){

  }

  async create(data){
    const newTypeUser = await models.TypeUser.create(data);
    return newTypeUser;
  }
  async find(){
    const rta = await models.TypeUser.findAll();
    return rta;
  }

  async findOne(id){
    const typeUser = await models.TypeUser.findByPk(id, {
      include: ['userscompany']
    });
    if (!typeUser) {
      throw boom.notFound('user not found');
    }
    return typeUser;
  }

  async update(id, changes){
    const typeUser = await this.findOne(id);
    const rta = await typeUser.update(changes);
    return rta;
  }

  async delete(id){
    const typeUser = await this.findOne(id);
    await typeUser.destroy();
    return { id };
  }

}
module.exports = TypeUserService;
