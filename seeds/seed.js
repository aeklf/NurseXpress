const sequelize = require('./../config/connection');
// const User = require('./../models/User')


const seedEmployee = require('./employeesSeedData');
const seedCities = require('./citiesSeedData');
const seedUser = require('./userSeedData');

const seedAll = async ()=>{
    await sequelize.sync({force:false});

    await seedUser();
    console.log('\n----- User SEEDED -----\n');
    
    await seedEmployee();
    console.log('\n----- Employees SEEDED -----\n');
    
    await seedCities();
    console.log('\n----- Cities SEEDED -----\n');

    process.exit(0);
}

seedAll();
// const seedData = async () => {
//     // await sequelize.sync();
//     await User.bulkCreate(userSeedData, {
//         validate: true,
//         individualHooks: true
//     });
    

//     process.exit(0);
// }

// seedData();
