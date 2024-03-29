'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, Stage_event, Meet_greet, Set_time }) {

      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages',
        through: Stage_event
      });

      Event.hasMany(Meet_greet, {
        foreignKey: 'event_id',
        as: 'meet_greets'
      });

      Event.hasMany(Set_time, {
        foreignKey: 'event_id',
        as: 'set_times'
      });

      Event.hasMany(Stage_event, {
        foreignKey: 'event_id',
        as: 'stage_events'
      });
      // define association here
    }
  }
  Event.init({
    event_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_name: {
      type:DataTypes.STRING,
      allowNull: false
  },
    event_date: {
      type:DataTypes.DATEONLY,
      allowNull: false
  },
    start_time: {
      type:DataTypes.DATE,
      allowNull: false
  },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false
  }}, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};