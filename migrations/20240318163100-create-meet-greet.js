'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        references: {
          model:'Event',
          key: 'event_id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      band_id: {
        references: {
          model:'Band',
          key: 'band_id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      meet_end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};