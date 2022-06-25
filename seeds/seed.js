const sequelize = require('./../config/connection');
// const User = require('./../models/User')

const seedEmployee = require('./employeesSeedData');
const seedCities = require('./citiesSeedData');
const seedUser = require('./userSeedData');
const seedServices = require('./servicesSeedData');
const seedAppointments = require('./appointmentsSeedData');
const seedServicesProvided = require('./servicesProvidedSeedData');

const seedAll = async ()=>{
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await sequelize.sync({force:true});
    
    await seedCities();
    console.log('\n----- Cities SEEDED -----\n');
    
    await seedUser();
    console.log('\n----- User SEEDED -----\n');
    
    await seedEmployee();
    console.log('\n----- Employees SEEDED -----\n');
    
    await seedServices();
    console.log('\n----- Services SEEDED -----\n');
    
    await seedAppointments();
    console.log('\n----- Appointments SEEDED -----\n');

    await seedServicesProvided();
    console.log('\n----- Services Provided SEEDED -----\n');

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
