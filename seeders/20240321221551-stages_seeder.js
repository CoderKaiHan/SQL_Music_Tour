'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('stages', [
      { stage_name: 'Main Stage' },
      { stage_name: 'Acoustic Stage' },
      { stage_name: 'Electronic Stage' },
      { stage_name: 'Jazz Stage' },
      { stage_name: 'Rock Stage' },
      { stage_name: 'Indie Stage' },
      { stage_name: 'Hip Hop Stage' },
      { stage_name: 'Reggae Stage' },
      { stage_name: 'Classical Stage' },
      { stage_name: 'Experimental Stage' }
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

    await queryInterface.bulkDelete('stages', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
