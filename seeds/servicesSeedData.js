const { Services } = require('../models');

const serviceData = [
    {
        "name": "Basic Rehydration",
        "description": "IV fluids and electrolytes formulated for quick hydration.",
        "price": 50
    },
    {
        "name": "Full Recovery",
        "description": "IV fluids, electrolytes and vitamins formulated to overcome basic symptoms.",
        "price": 75
    },
    {
        "name": "Detox",
        "description": "Mix of IV fluids, vitamins and medications formulated to detoxify your body and overcome hangover symptoms.",
        "price": 100
    },
    {
        "name": "Resurrection",
        "description": "Mix of every other plan",
        "price": 125
    }
];

const seedServices = () => Services.bulkCreate(serviceData, {
    validate: true,
});

module.exports = seedServices;