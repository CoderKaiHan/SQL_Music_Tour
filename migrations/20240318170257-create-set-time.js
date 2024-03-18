'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
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
      stage_id: {
        references: {
          model:'Stage',
          key: 'stage_id'
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
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};