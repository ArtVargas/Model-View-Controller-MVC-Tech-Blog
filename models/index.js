// Import the necessary models //
const User = require("./User");
const Post = require("./Post");
const Comment= require("./Comment");

// Define the relationships between models //
// This will set up the foreign key//

User.hasMany(Post, {
foreignKey: "user_id",
});

Post.belongTo(User, {
foreignKey: "user_id",
});

Comment.belongsto(User, {
foreignKey: "user_id",
});

Post.hasMany(Comment, {
foreignKey: "post_id",
});
User.hasMany(Comment, {
foreignKey: "user_id",
});

// Export the models //
module.exports = { User, Post, Comment };