'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Meet_greet, Set_time }) {
      
      Band.hasMany(Meet_greet, {
        foreignKey: 'band_id',
        as: 'meet_grees'
      });

      Band.hasMany(Set_time, {
        foreignKey: 'band_id',
        as: 'set_times'
      });
      // define association here
    }
  }
  Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    band_name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    band_genre: DataTypes.TEXT,
    band_members: {
        type:DataTypes.STRING,
        allowNull: false
    },
    band_size: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    recommendation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    available_start_time: {
        type:DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type:DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });
  return Band;
};