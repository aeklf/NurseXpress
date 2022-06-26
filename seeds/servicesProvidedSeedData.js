const { ServicesProvided } = require('../models');

const serviceProvidedData = [
    {
        "employee_id": 4,
        "service_id": 4
    },
    {
        "employee_id": 14,
        "service_id": 14
    },
    {
        "employee_id": 24,
        "service_id": 24
    },
    {
        "employee_id": 34,
        "service_id": 4
    },
    {
        "employee_id": 44,
        "service_id": 14
    }
];

const seedServicesProvided = () => ServicesProvided.bulkCreate(serviceProvidedData, {
        validate: true,
});

module.exports = seedServicesProvided;