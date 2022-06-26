const { Appointment } = require('../models');

const appointmentsData = [
    // {
    //     "employee_name": "Lalito Perez",
    //     "user_name": "John Doe",
    //     "service_name": "Package 1",
    //     "service_price": "$50",
    //     "date": "6/20/2022",
    //     "hour": "2:00",
    //     "location": "Mexico City"
    // },
    {
        "employee_id": 4,
        "user_id": 4,
        "service_id": 4,//Aqui debe ir el price del service
        "date": "6/20/2022",
        "hour": "02:00:00",
        "location_id": 4
    }
];

const seedAppointments = () => Appointment.bulkCreate(appointmentsData, {
    validate: true,
});

module.exports = seedAppointments;