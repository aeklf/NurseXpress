const sequelize = require('./../config/connection');
const User = require('./../models/User')
const userSeedData = require('./userSeedData.json');

const seedData = async () => {
    // await sequelize.sync();
    await User.bulkCreate(userSeedData, {
        validate: true,
        individualHooks: true
    });
    process.exit(0);
}

seedData();
