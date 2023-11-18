const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    createdAt: { type: Date, default: Date.now }
}
,
{
    collation:"mednews"
}
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
