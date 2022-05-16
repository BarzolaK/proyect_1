const { Model, DataTypes, Sequelize } = require('sequelize');

const CATALOG_TABLE = 'catalogs';

const CatalogSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  table: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  value: {
    allowNull: false,
    type: DataTypes.INTEGER
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

class Catalog extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATALOG_TABLE,
      modelName: 'Catalog',
      timestamps: false
    }
  }
}


module.exports = { CATALOG_TABLE, CatalogSchema, Catalog }
