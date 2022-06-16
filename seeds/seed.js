const sequelize = require('./../config/connection');
const User = require('./../models/User')
const userSeedData = require('./userSeedData.json');

const seedData = async () => {
    // await sequelize.sync( {force: true});
    await User.bulkCreate(userSeedData);
    process.exit(0);
}

seedData();
