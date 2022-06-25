const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // Method to compare the user's input with the user's hashed password when user login 
    async checkPassword(userPassword){
        if(userPassword){
            return bcrypt.compare(userPassword, this.password)
        }
        return false;
    }
};

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
        street_name_and_number: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone_number:{
            type:DataTypes.BIGINT,
            allowNull: false,
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