const express = require('express');
const Router = express.Router();
const homeController = require('../controllers/main.controller');

Router.get("/", homeController.RenderHome);
// 404 page
Router.get("*", homeController.Render404);

module.exports = Router;