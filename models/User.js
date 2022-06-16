const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {};

User.init(
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
                len: [6, 32]
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i,
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (userInput) => {
                userInput.password = await bcrypt.hash(userInput.password, 10);
                // return userInput.password
            },
            beforeUpdate: async (userInput) => {
                userInput.password = await bcrypt.hash(userInput.password, 10);
                // return userInput.password
            }
        },
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;