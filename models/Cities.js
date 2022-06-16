const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');
const bcrypt = require('bcrypt');

class Cities extends Model {};

Cities.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        latitud: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        longitude: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
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