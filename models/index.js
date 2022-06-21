const User = require('./User');
const Cities = require('./Cities');
const Employee = require('./Employee');
const Services = require('./services');
const Appointment = require('./Appointments');
const ServicesProvided = require('')

//Employee -> Appointments One-to-many 
    Employee.hasMany(Appointment, {
        foreignKey: 'employee_id',
    });

    Appointment.belongsTo(Employee, {
        foreignKey: 'employee_id',
    });
    
//User -> Appointments One-to-many
    User.hasMany(Appointment, {
        foreignKey:'user_id',
    });

    Appointment.belongsTo(User, {
        foreignKey: 'user_id',
    });
//Cities -> Appointments One-to-many
    Cities.hasMany(Appointment, {
        foreignKey: 'location_id',
    });

    Appointment.belongsTo(Cities, {
        foreignKey: 'location_id',
    });
//Employee -> Services Many-to-Many
    Services.belongsToMany(Employee, {
        through: ServicesProvided,
    });

    Employee.belongsToMany(Services, {
        through: ServicesProvided,
    });


module.exports = {
    User,
    Cities,
    Employee,
    Services,
    Appointment,
    ServicesProvided,
};




