'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // band_id: {
      //   type: Sequelize.INTEGER
      // },
      band_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      band_genre: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      band_members: {
        type: Sequelize.STRING,
        allowNull: false
      },
      band_size: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bands');
  }
};