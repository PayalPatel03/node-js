
const { Router } = require("express");
const userCtl = require('../controllers/user.controller');
const userRouter = Router();

userRouter.post('/',userCtl.createUser);

module.exports = userRouter;
