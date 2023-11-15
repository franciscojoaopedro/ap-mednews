const express = require('express');
const commentRoutes = express.Router();
const commentController = require('../controllers/commentController');

// Defina as rotas para operações relacionadas a comentários

module.exports=commentRoutes
commentRoutes.post("/create",commentController.execute);