const express =require("express");
const userRouter = express.Router();

const {getUser, addNewUser, getAllUsers} = require("../controllers/user");
const {users} = require("../db");

userRouter.get('/', getUser);
userRouter.get('/user', getAllUsers);
userRouter.post('/register', addNewUser);

module.exports={userRouter};