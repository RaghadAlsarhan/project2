const express =require("express");
const userRouter = express.Router();
const { user } = require("../userDB");
const {getUser, addNewUser, getAllUsers} = require("../controllers/user");


userRouter.get('/', getAllUsers);
userRouter.post('/signin', getUser); //login
userRouter.post('/register', addNewUser); //register

module.exports = { userRouter };