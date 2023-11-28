//Import modules
const router = require("express").Router();
const { comment } = require("../../utils/auth");

// Create a new comment //
router.post("/", withAuth, async (req, res) => {
try {

// Create a new comment with given data that is provided //

const newComment = await Comment.create({
...req.body,
user_id: req.session.user_id,
});

// Response will be sent with new comment data //
res.status(200).json(newComment);
} catch (err) {

// Send an error response if something has gone wrong //
res.status(400).json(err);
}
});

// Router will be exported here //
module.exports = router;