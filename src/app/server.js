const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const PostRouter = require("../routes/postRoutes");
require('dotenv').config();

const commentRoutes = require("../routes/commentRoutes");
const authorRoutes = require("../routes/authorRoutes");

const MONGODB_URI=process.env.MONGODB_URI_PROD || process.env.MONGODB_URI_DEV ;
class App {
  constructor() {
    this.server = express();
    this.connection();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }
  routes() {
    this.server.use("/posts", PostRouter);
    this.server.use("/authors", authorRoutes);
    this.server.use("/comments", commentRoutes);
  }
  async connection() {
    try {
      await mongoose
        .connection.collection("mednews")
        .connect(`${MONGODB_URI}`, {})
        .then(() => console.log("mongodb is connected"))
        .catch(error => console.log(`error ao conectar ao mongodb, ${error}`));
    } catch (error) {console.log("error ao conectar ao mongodb")}
  }
}

module.exports = new App().server;
