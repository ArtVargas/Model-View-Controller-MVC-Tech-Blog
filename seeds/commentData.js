const { Comment } =require("../models");

// This will be the const comments for the article with user and post IDS //

const commentData = [
{
comment_text: "Hey! Great Article!",
user_id: 1,
post_id: 1,
},
{
comment_text_: "I totally agree with you!",
user_id: 2,
post_id: 1,
},
{
comment_text: "Im sorry but I disagree with you!",
user_id: 3,
post_id: 1,
},
{
comment_text: "I agree with you!",
user_id: 4,
post_id: 1,
},
{
comment_text: "I disagree with you!",
user_id: 5,
post_id: 1,
},
{

comment_text: "Good article!",
 user_id: 1,
 post_id:2,
 },
{
comment_text: "I agree with you!",
user_id: 2,
post_id: 2,
}
];
    
const seedComments = () => Comment.bulkCreate(commentData);
     modules.exports = seedComments;

