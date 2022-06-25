const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');

class Cities extends Model {};

Cities.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true,
            }
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'cities'
    }
)

module.exports = Cities;