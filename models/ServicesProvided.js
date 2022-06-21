const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ServiceProvided extends Model {};

ServiceProvided.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id',
            },
        },
        service_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'service',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'serviceProvided'
    }
)

module.exports = ServiceProvided;