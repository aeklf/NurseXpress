const sequelize = require('./../config/connection');
const User = require('./../models/User')
const seedEmployee = require('./employeesSeedData')
const seedCities = require('./citiesSeedData')

const userSeedData = require('./userSeedData.json');

const seedData = async () => {
    // await sequelize.sync();
    await User.bulkCreate(userSeedData, {
        validate: true,
        individualHooks: true
    });
    
    await seedEmployee();
    await seedCities();

    process.exit(0);
}

seedData();
