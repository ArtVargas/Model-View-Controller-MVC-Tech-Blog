// This will be imported from ../models directory //
// More or less the same code as the post data but be sure to make changes //

const { User } = require("../models");

const userData = [
{
username: "user1",
email: "user1@something.com",
password: password1,
},

{
username: "user2",
email: "user2@something.com",
password: password2,
},
{
username:  "user3",
email:"user3@something.com",
password: password3,
},
{
username: "user4",
email: "user4@something.com",
password: password4,
},

];

const seedPosts =() => User.bulkCreate(userData);

module.exports = seedUsers;