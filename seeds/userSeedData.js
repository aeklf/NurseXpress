const User = require('../models/User')

const userData = [
    {
        "email": "test2wqq22@test.com",
        "password": "1232123121334",
        "first_name": "John",
        "last_name": "Doe"

    },
    {
        "email": "test2wqd24@test.com",
        "password": "1233131232134",
        "first_name": "John",
        "last_name": "Doe"
    }
];

const seedUser = () => User.bulkCreate(userData, {
        validate: true,
        individualHooks: true
});

module.exports = seedUser;