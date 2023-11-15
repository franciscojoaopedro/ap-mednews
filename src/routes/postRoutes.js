const express = require('express');
const PostRouter = express.Router();
const postController = require('../controllers/postController');

// Defina as rotas para operações relacionadas a postagens

PostRouter.get("/index",postController.index);
PostRouter.post("/create",postController.execute);
PostRouter.put("/update",postController.update);
PostRouter.delete("/destroy",postController.destroy);
module.exports=PostRouter