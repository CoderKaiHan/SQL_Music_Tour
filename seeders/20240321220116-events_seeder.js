'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('events', [
      {
        event_name: 'Rock Revolution Tour',
        event_date: '2024-04-15',
        start_time: '2024-04-15T18:00:00.000Z',
        end_time: '2024-04-15T23:00:00.000Z'
      },
      {
        event_name: 'Pop Extravaganza Tour',
        event_date: '2024-05-10',
        start_time: '2024-05-10T19:00:00.000Z',
        end_time: '2024-05-10T22:00:00.000Z'
      },
      {
        event_name: 'Indie Showcase Tour',
        event_date: '2024-06-20',
        start_time: '2024-06-20T20:00:00.000Z',
        end_time: '2024-06-21T00:00:00.000Z'
      },
      {
        event_name: 'Jazz Fusion Tour',
        event_date: '2024-07-08',
        start_time: '2024-07-08T21:00:00.000Z',
        end_time: '2024-07-09T02:00:00.000Z'
      },
      {
        event_name: 'Electronic Beats Tour',
        event_date: '2024-08-05',
        start_time: '2024-08-05T22:30:00.000Z',
        end_time: '2024-08-06T03:30:00.000Z'
      },
      {
        event_name: 'Classical Odyssey Tour',
        event_date: '2024-09-18',
        start_time: '2024-09-18T19:30:00.000Z',
        end_time: '2024-09-18T23:30:00.000Z'
      },
      {
        event_name: 'Hip Hop Chronicles Tour',
        event_date: '2024-10-25',
        start_time: '2024-10-25T20:00:00.000Z',
        end_time: '2024-10-26T01:00:00.000Z'
      },
      {
        event_name: 'Country Roads Tour',
        event_date: '2024-11-12',
        start_time: '2024-11-12T18:30:00.000Z',
        end_time: '2024-11-13T22:30:00.000Z'
      },
      {
        event_name: 'R&B Groove Tour',
        event_date: '2024-12-03',
        start_time: '2024-12-03T21:30:00.000Z',
        end_time: '2024-12-04T02:30:00.000Z'
      },
      {
        event_name: 'World Music Spectacle Tour',
        event_date: '2025-01-20',
        start_time: '2025-01-20T19:00:00.000Z',
        end_time: '2025-01-21T00:00:00.000Z'
      }  
    ])
    /**
     * Add seed commands here.
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('events', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
