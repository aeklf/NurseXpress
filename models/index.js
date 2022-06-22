const User = require('./User');
const Cities = require('./Cities');
const Employee = require('./Employee');
const Services = require('./services');
const Appointment = require('./Appointments');
const ServicesProvided = require('./ServicesProvided');

//Appointments - Employee One-to-One 
Appointment.belongsTo(Employee, {
    foreignKey: 'employee_id',
});
Employee.hasMany(Appointment, {
    foreignKey: 'employee_id',
});
//Appointments - User One-to-One 
Appointment.belongsTo(User, {
    foreignKey: 'user_id',
});
User.hasMany(Appointment, {
    foreignKey: 'user_id',
});
//Appointments - Service One-to-One 
Appointment.belongsTo(Services, {
    foreignKey: 'service_id',
});
Services.hasMany(Appointment, {
    foreignKey: 'service_id',
});
//Appointments - Location One-to-One 
Appointment.belongsTo(Cities, {
    foreignKey: 'location_id',
});
Cities.hasMany(Appointment, {
    foreignKey: 'location_id',
});

// Employee - Cities One-to-One
Employee.belongsTo(Cities, {
    foreignKey: 'city_id'
});
Cities.hasOne(Employee, {
    foreignKey: 'city_id'
});

// Employee <-> Services Many-to-Many
Employee.belongsToMany(Services, {
    through: ServicesProvided
});

Services.belongsToMany(Employee, {
    through: ServicesProvided
});

module.exports = {
    User,
    Cities,
    Employee,
    Services,
    Appointment,
    ServicesProvided,
};




