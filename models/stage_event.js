'use strict';
const {
  Model
} = require('sequelize');

const Stage = require('./stage');
const Event = require('./event');
module.exports = (sequelize, DataTypes) => {
  class Stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, Event}) {
      // define association here
      Stage_event.belongsTo(Stage,{
        foreignKey: 'stage_id',
        as: 'stages'
      });

      Stage_event.belongsTo(Event, {
        foreignKey:'event_id',
        as: 'events'
      });
    }
  }
  Stage_event.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model:Stage,
        key: 'stage_id'
      }
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:'Event',
        key: 'event_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Stage_event',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_event;
};