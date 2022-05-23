const { Model, DataTypes, Sequelize } = require('sequelize');

const PAGE_TABLE = 'page';

const PageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentId: {
    field: 'parent_id',
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },

}

class Page extends Model {
  static associate() {
    //this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAGE_TABLE,
      modelName: 'Page',
      timestamps: false
    }
  }
}

  module.exports = { Page, PageSchema, PAGE_TABLE };
