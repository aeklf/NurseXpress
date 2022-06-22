const { User } = require('../models')

const userData = [
    {
        "email": "test2wqq22@test.com",
        "password": "1232123121334",
        "first_name": "John",
        "last_name": "Doe",
        "street_name_and_number": "Av. Mexico 89",
        "zipcode": 56290

    },
    {
        "email": "test2wqd24@test.com",
        "password": "1233131232134",
        "first_name": "John",
        "last_name": "Doe",
        "street_name_and_number": "Av. Mexico 89",
        "zipcode": 56290
    }
];

const seedUser = () => User.bulkCreate(userData, {
        validate: true,
        individualHooks: true
});

module.exports = seedUser;