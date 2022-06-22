const { ServicesProvided } = require('../models');

const serviceProvidedData = [
    {
        "employee_id": 1,
        "service_id": 2
    },
    {
        "employee_id": 2,
        "service_id": 3
    },
    {
        "employee_id": 3,
        "service_id": 1
    },
    {
        "employee_id": 1,
        "service_id": 1
    },
    {
        "employee_id": 1,
        "service_id": 3
    }
];

const seedServicesProvided = () => ServicesProvided.bulkCreate(serviceProvidedData, {
        validate: true,
});

module.exports = seedServicesProvided;