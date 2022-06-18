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
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        lat: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        long: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
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