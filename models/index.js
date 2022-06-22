const User = require('./User');
const Cities = require('./Cities');
const Employee = require('./Employee');
const Services = require('./services');
const Appointment = require('./Appointments');
const ServicesProvided = require('./ServicesProvided');

//Appointments - Employee One-to-One 
Appointment.hasOne(Employee, {
    foreignKey: 'employee_id',
});
Employee.belongsTo(Appointment, {
    foreignKey: 'employee_id',
});
//Appointments - User One-to-One 
Appointment.hasOne(User, {
    foreignKey: 'user_id',
});
User.belongsTo(Appointment, {
    foreignKey: 'user_id',
});
//Appointments - Service One-to-One 
Appointment.hasOne(Services, {
    foreignKey: 'service_id',
});
Services.belongsTo(Appointment, {
    foreignKey: 'service_id',
});
//Appointments - Location One-to-One 
Appointment.hasOne(Cities, {
    foreignKey: 'location_id',
});
Cities.belongsTo(Appointment, {
    foreignKey: 'location_id',
});

//Employee - Cities One-to-One
Employee.hasOne(Cities, {
    foreignKey: 'city_id',
});
Cities.belongsTo(Employee, {
    foreignKey: 'city_id',
});

//Employee <-> Services Many-to-Many
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




