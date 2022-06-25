const { Employee } = require('../models');

const employeeData = [
    {
        "email": "prueba1@gmail.com",
        "password": "12345678",
        "first_name": "Lalito",
        "last_name": "Perez",
        "city_id": 1,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba2@gmail.com",
        "password": "12345678",
        "first_name": "Chanchito",
        "last_name": "Feliz",
        "city_id": 2,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba3@gmail.com",
        "password": "12345678",
        "first_name": "Bat",
        "last_name": "Woman",
        "city_id": 3,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba4@gmail.com",
        "password": "12345678",
        "first_name": "Harley",
        "last_name": "Quinn",
        "city_id": 4,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba5@gmail.com",
        "password": "12345678",
        "first_name": "Clark",
        "last_name": "Kent",
        "city_id": 10,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba6@gmail.com",
        "password": "12345678",
        "first_name": "Peter",
        "last_name": "Jackson",
        "city_id": 6,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba7@gmail.com",
        "password": "12345678",
        "first_name": "Peter",
        "last_name": "Parker",
        "city_id": 7,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
    {
        "email": "prueba8@gmail.com",
        "password": "12345678",
        "first_name": "Frodo",
        "last_name": "Baggins",
        "city_id": 8,
        "available_schedule": "02/02/2022",
        "phone_number": 5555555555
    },
];

const seedEmployee = () => Employee.bulkCreate(employeeData, {
    validate: true,
    individualHooks: true
});

module.exports = seedEmployee;