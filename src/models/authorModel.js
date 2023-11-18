
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
},
{
    collation:"mednews"
}
);

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;