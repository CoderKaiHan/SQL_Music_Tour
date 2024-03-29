'use strict';
const {
  Model
} = require('sequelize');
const Stage = require('./stage');
const Event = require('./event');
const Band = require('./band');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( {Band, Event, Stage} ) {

      Set_time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'bands'
      });

      Set_time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'events'
      });

      Set_time.belongsTo(Stage, {
        foreignKey: 'event_id',
        as: 'stages'
      });
      // define association here
    }
  }
  Set_time.init({
    set_time_id: {
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
    stage_id: {
      type: DataTypes.INTEGER,
      references: {
        model:Stage,
        key: 'stage_id'
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
    start_time: {
      type:DataTypes.DATE,
      allowNull: false
  },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_time;
};