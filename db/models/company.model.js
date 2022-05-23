const { Model, DataTypes, Sequelize } = require('sequelize');

const COMPANY_TABLE = 'companies';

const CompanySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  typeCompany: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  adress: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  contactName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Company extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      as: 'userscompany',
      foreignKey: 'companyId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'Company',
      timestamps: false
    }
  }
}


module.exports = { COMPANY_TABLE, CompanySchema, Company }
