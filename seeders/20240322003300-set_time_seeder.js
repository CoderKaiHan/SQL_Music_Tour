'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('set_times', [
      {
        event_id: 1,
        stage_id: 1,
        band_id: 1,
        start_time: '2024-04-15T18:00:00.000Z',
        end_time: '2024-04-15T19:00:00.000Z'
      },
      {
        event_id: 2,
        stage_id: 2,
        band_id: 2,
        start_time: '2024-05-10T19:30:00.000Z',
        end_time: '2024-05-10T20:30:00.000Z'
      },
      {
        event_id: 3,
        stage_id: 3,
        band_id: 3,
        start_time: '2024-06-20T20:00:00.000Z',
        end_time: '2024-06-20T21:00:00.000Z'
      },
      {
        event_id: 4,
        stage_id: 4,
        band_id: 4,
        start_time: '2024-07-08T21:30:00.000Z',
        end_time: '2024-07-08T22:30:00.000Z'
      },
      {
        event_id: 5,
        stage_id: 5,
        band_id: 5,
        start_time: '2024-08-05T22:00:00.000Z',
        end_time: '2024-08-05T23:00:00.000Z'
      },
      {
        event_id: 6,
        stage_id: 6,
        band_id: 6,
        start_time: '2024-09-18T18:00:00.000Z',
        end_time: '2024-09-18T19:00:00.000Z'
      },
      {
        event_id: 7,
        stage_id: 7,
        band_id: 7,
        start_time: '2024-10-25T19:30:00.000Z',
        end_time: '2024-10-25T20:30:00.000Z'
      },
      {
        event_id: 8,
        stage_id: 8,
        band_id: 8,
        start_time: '2024-11-12T20:00:00.000Z',
        end_time: '2024-11-12T21:00:00.000Z'
      },
      {
        event_id: 9,
        stage_id: 9,
        band_id: 9,
        start_time: '2024-12-03T21:30:00.000Z',
        end_time: '2024-12-03T22:30:00.000Z'
      },
      {
        event_id: 10,
        stage_id: 10,
        band_id: 10,
        start_time: '2025-01-20T22:00:00.000Z',
        end_time: '2025-01-20T23:00:00.000Z'
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('set_times', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
