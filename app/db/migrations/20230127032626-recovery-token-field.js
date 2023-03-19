'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
      field: 'recovery_token',
      allowNull: true,
      type: DataTypes.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'recovery_token');
  },
};
