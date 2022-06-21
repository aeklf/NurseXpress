const Employee = require('../models/Employee');

const employeeData = [
    {
        "email": "prueba1@gmail.com",
        "password": "12345678",
        "first_name": "Lalito",
        "last_name": "Perez",
        "city_id": 1,
        "available_schedule": "02/02/2022"
    },
    // {
    //     "email": "prueba2@gmail.com",
    //     "password": "12345678",
    //     "first_name": "Chanchito",
    //     "last_name": "Feliz",
    //     "city_id": 2,
    //     "available_schedule": "02/02/2022"
    // },
    // {
    //     "email": "prueba3@gmail.com",
    //     "password": "12345678",
    //     "first_name": "Jorge",
    //     "last_name": "Paredes",
    //     "city_id": 3,
    //     "available_schedule": "02/02/2022"
    // }
];

const seedEmployee = () => Employee.bulkCreate(employeeData, {
    validate: true,
    individualHooks: true
});

module.exports = seedEmployee;