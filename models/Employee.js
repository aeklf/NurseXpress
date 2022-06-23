const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');
const bcrypt = require('bcrypt');

class Employee extends Model {};

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        city_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cities',
                key: 'id'
            }
        },
        phone_number: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        available_schedule: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (employeeInput) => {
                employeeInput.password = await bcrypt.hash(employeeInput.password, 8);
                return employeeInput;
            },
            beforeUpdate: async (employeeInput) => {
                employeeInput.password = await bcrypt.hash(employeeInput.password, 8);
                return employeeInput;
            }
        },
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'employee'
    }
)

module.exports = Employee;