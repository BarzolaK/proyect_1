'use strict';

const { CATALOG_TABLE } = require('./../models/catalog.model')
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(CATALOG_TABLE, 'name',{
      allowNull: false,
      type: DataTypes.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(CATALOG_TABLE, 'name');
  }
};
