// This will import all the seed data functiions //

const seedUsers= require("./userData");
const seedPosts = require("./postData");
const seedComments = require("/commentData");

// This will import the sequelize connection //

const sequelize= require("../config/connection");

// Function to seed all the data /

// Importing sequelize connection
const sequelize =require("../config/connection");

//Function to seed all data by callinf the three seed functions //
const seedAll = async () => {

// Synching the sequelize models//
await sequelize.sync({ force: true });

// Calling each of the seed data functions
await seedUsers();
await seedPosts();
await seedComments();

// This will exit the process //
process.exit(0);
};

// Calling the seedAll function to seed the database //
seedAll();


