
const { Router } = require("express");
const categoryCtl=require('../controllers/category.controller')

const catrouter = Router();

catrouter.get('/addCategory',categoryCtl.addCategory)



module.exports = catrouter;
