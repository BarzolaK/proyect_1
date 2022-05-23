const { Model, DataTypes, Sequelize } = require('sequelize');

const { TYPEUSER_TABLE } = require('./typeUser.model');
const { COMPANY_TABLE } = require('./company.model');

const USERCOMPANY_TABLE = 'users_company';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  companyId: {
    field: 'company_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COMPANY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  typeUserId: {
    field: 'type_user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPEUSER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(models) {
    this.belongsTo(models.TypeUser, { as: 'typeUser' });
    this.belongsTo(models.Company, { as: 'company' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USERCOMPANY_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USERCOMPANY_TABLE, UserSchema, User }
