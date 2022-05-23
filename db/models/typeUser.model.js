const { Model, DataTypes, Sequelize } = require('sequelize');

const TYPEUSER_TABLE = 'type_user';

const TypeUserSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class TypeUser extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      as: 'userscompany',
      foreignKey: 'typeUserId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TYPEUSER_TABLE,
      modelName: 'TypeUser',
      timestamps: false
    }
  }
}


module.exports = { TYPEUSER_TABLE, TypeUserSchema, TypeUser }
