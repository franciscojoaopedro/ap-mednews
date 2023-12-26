const express = require('express');
const authorRoutes = express.Router();
const authorController = require('../controllers/authorController');

authorRoutes.get("/index",authorController.index);
authorRoutes.get("/user/:email",authorController.indexOne);
authorRoutes.post("/create",authorController.execute);
authorRoutes.put("/update",authorController.update);
authorRoutes.delete("/destroy/:id",authorController.destroy);

module.exports=authorRoutes;