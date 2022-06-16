const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');

class Service extends Model {};

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        },
        active_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'empployee',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'service'
    }
)

module.exports = Service;