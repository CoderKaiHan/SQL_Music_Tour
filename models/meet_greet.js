'use strict';
const {
  Model
} = require('sequelize');

const Event = require('./event');
const Band = require('./band');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greet.init({
    meet_greet_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model:Event,
        key: 'event_id'
      },
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model:Band,
        key: 'band_id'
      },
      allowNull: false
    },
    meet_start_time: {
      type:DataTypes.DATE,
      allowNull: false
  },
    meet_end_time: {
      type:DataTypes.DATE,
      allowNull: false
  }}, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_greet;
};