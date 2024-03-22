'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('meet_greets', [
      {
        event_id: 1,
        band_id: 1,
        meet_start_time: '2024-04-15T18:00:00.000Z',
        meet_end_time: '2024-04-15T19:00:00.000Z'
      },
      {
        event_id: 2,
        band_id: 2,
        meet_start_time: '2024-05-10T19:30:00.000Z',
        meet_end_time: '2024-05-10T20:30:00.000Z'
      },
      {
        event_id: 3,
        band_id: 3,
        meet_start_time: '2024-06-20T20:00:00.000Z',
        meet_end_time: '2024-06-20T21:00:00.000Z'
      },
      {
        event_id: 4,
        band_id: 4,
        meet_start_time: '2024-07-08T21:30:00.000Z',
        meet_end_time: '2024-07-08T22:30:00.000Z'
      },
      {
        event_id: 5,
        band_id: 5,
        meet_start_time: '2024-08-05T22:00:00.000Z',
        meet_end_time: '2024-08-05T23:00:00.000Z'
      },
      {
        event_id: 6,
        band_id: 6,
        meet_start_time: '2024-09-18T18:00:00.000Z',
        meet_end_time: '2024-09-18T19:00:00.000Z'
      },
      {
        event_id: 7,
        band_id: 7,
        meet_start_time: '2024-10-25T19:30:00.000Z',
        meet_end_time: '2024-10-25T20:30:00.000Z'
      },
      {
        event_id: 8,
        band_id: 8,
        meet_start_time: '2024-11-12T20:00:00.000Z',
        meet_end_time: '2024-11-12T21:00:00.000Z'
      },
      {
        event_id: 9,
        band_id: 9,
        meet_start_time: '2024-12-03T21:30:00.000Z',
        meet_end_time: '2024-12-03T22:30:00.000Z'
      },
      {
        event_id: 10,
        band_id: 10,
        meet_start_time: '2025-01-20T22:00:00.000Z',
        meet_end_time: '2025-01-20T23:00:00.000Z'
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

    await queryInterface.bulkDelete('meet_greets', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
