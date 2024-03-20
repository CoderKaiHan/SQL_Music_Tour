'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('bands', [
      {
        band_id: 1,
        band_name: 'Queen',
        band_genre: 'rock',
        band_members: 'Freddie Mercury, Brian May, Roger Taylor, John Deacon',
        band_size: 4,
        available_start_time: '1985-07-13T18:41:00',
        end_time: '1985-07-13T19:02:00'
      },
      {
        band_id: 2,
        band_name: 'Another Band',
        band_genre: 'pop',
        band_members: 'John Lennon, Paul McCartney, George Harrison, Ringo Starr',
        band_size: 4,
        available_start_time: '1960-01-01T12:00:00',
        end_time: '1970-04-10T00:00:00'
      },
      {
        band_id: 3,
        band_name: 'Classic Band',
        band_genre: 'classic rock',
        band_members: 'Robert Plant, Jimmy Page, John Paul Jones, John Bonham',
        band_size: 4,
        available_start_time: '1968-09-07T20:00:00',
        end_time: '1980-12-04T00:00:00'
      },
      {
        band_id: 4,
        band_name: 'Rock Legends',
        band_genre: 'hard rock',
        band_members: 'Axl Rose, Slash, Duff McKagan, Steven Adler',
        band_size: 4,
        available_start_time: '1985-03-26T19:00:00',
        end_time: '1990-07-17T00:00:00'
      },
      {
        band_id: 5,
        band_name: 'Famous Quartet',
        band_genre: 'jazz',
        band_members: 'Miles Davis, John Coltrane, Cannonball Adderley, Bill Evans',
        band_size: 4,
        available_start_time: '1959-03-02T21:00:00',
        end_time: '1960-09-27T00:00:00'
      },
      {
        band_id: 6,
        band_name: 'Iconic Group',
        band_genre: 'disco',
        band_members: 'Donna Summer, Giorgio Moroder, Pete Bellotte',
        band_size: 3,
        available_start_time: '1977-02-06T20:00:00',
        end_time: '1981-07-17T00:00:00'
      },
      {
        band_id: 7,
        band_name: 'Legendary Trio',
        band_genre: 'blues',
        band_members: 'Stevie Ray Vaughan, Double Trouble',
        band_size: 3,
        available_start_time: '1981-01-01T18:00:00',
        end_time: '1990-08-27T00:00:00'
      },
      {
        band_id: 8,
        band_name: 'Famous Band',
        band_genre: 'indie rock',
        band_members: 'Thom Yorke, Jonny Greenwood, Colin Greenwood, Ed O\'Brien, Philip Selway',
        band_size: 5,
        available_start_time: '1991-01-01T00:00:00',
        end_time: '1998-12-31T23:59:59'
      },
      {
        band_id: 9,
        band_name: 'Classic Quartet',
        band_genre: 'classical',
        band_members: 'Ludwig van Beethoven, Wolfgang Amadeus Mozart, Johann Sebastian Bach, Franz Joseph Haydn',
        band_size: 4,
        available_start_time: '1750-01-01T00:00:00',
        end_time: '1800-12-31T23:59:59'
      },
      {
        band_id: 10,
        band_name: 'Famous Ensemble',
        band_genre: 'orchestral',
        band_members: 'Gustav Mahler, Leonard Bernstein, Johann Strauss II, Pyotr Ilyich Tchaikovsky',
        band_size: 4,
        available_start_time: '1850-01-01T00:00:00',
        end_time: '1900-12-31T23:59:59'
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
    return queryInterface.bulkDelete('bands', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};