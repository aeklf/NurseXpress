const Employee = require('../models/Employee');

const employeeData = [
    {
        "email": "prueba1@gmail.com",
        "password": "12345",
        "first_name": "Lalito",
        "last_name": "Perez",
        "citie_id": "1",
        "available_schedule": ""
    },
    {
        "email": "prueba2@gmail.com",
        "password": "12345",
        "first_name": "Chanchito",
        "last_name": "Feliz",
        "citie_id": "1",
        "available_schedule": ""
    },
    {
        "email": "prueba3@gmail.com",
        "password": "12345",
        "first_name": "Jorge",
        "last_name": "Paredes",
        "citie_id": "1",
        "available_schedule": ""
    }
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;