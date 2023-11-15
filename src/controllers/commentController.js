const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const Author = require("../models/authorModel");
const { ObjectId } = require("mongodb");
// Implemente as funções CRUD aqui
module.exports = {
  async index(req, res) {
    try {
      let comments = await Comment.find();

      return res.json({ error: false, comments });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Erro ao listar os Comments");
    }
  },
  async execute(req, res) {
    try {
      const { author_id, post_id } = await req.headers;
      const { content } = await req.body;
      const author = await Author.findById({ _id: author_id });
      const post = await Post.findById({ _id: post_id });

      
      const comment = await Comment.create({ content, author: author_id });

      await Post.updateOne(
        { _id: post_id },
        {
          $push: { comments: new ObjectId(comment._id) }
        }
      );

      const postDetails = await Post.findOne({ _id: post_id })
        .populate("author")
        .populate({
          path: "comments",
          populate: { path: "author"}
        });


        console.log(postDetails)
      return res.json({ ok: true, postDetails });
    } catch (error) {}
  },
  async update(req, res) {},
  async delete(req, res) {}
};
