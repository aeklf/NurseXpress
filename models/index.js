const User = require('./User');
const Cities = require('./Cities');
const Employee = require('./Employee');
const Services = require('./services');
const Appointment = require('./Appointments');


Employee.hasMany(Services, {
    foreignKey: 'employee_id'
});

Employee.hasMany(Appointment, {
    foreignKey: 'employee_id'
});


Services.belongsToMany(Employee)
Employee.belongsToMany(Services)



User.hasMany(Appointment, {
    foreignKey:'user_id'
});

Appointment.belongsTo(User, {
    foreignKey: 'user_id'
});

Appointment.belongsTo(Employee, {
    foreignKey: 'user_id'
});




Cities.hasMany(Services, {
    foreignKey: 'employee_id'
});


