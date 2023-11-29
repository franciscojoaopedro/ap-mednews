const express = require('express');
const commentRoutes = express.Router();
const commentController = require('../controllers/commentController');

// Defina as rotas para operações relacionadas a comentários

module.exports=commentRoutes
commentRoutes.get("/index",commentController.index);
commentRoutes.post("/create",commentController.execute);
commentRoutes.put("/edit",commentController.update);
commentRoutes.delete("/destroy/:id",commentController.destroy);