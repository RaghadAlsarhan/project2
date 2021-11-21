const {users} = require('../db')

const getAllUsers = (req, res)=>{
    res.send(users);
}

const getUser = (req, res)=>{
    const foundUser = users.find(
        ({email, password})=>
        email == req.body.email && password === req.body.password
    );
    if(foundUser)res.send(foundUser);
    else
    res.status(404).send("couldn't find user");
}

const addNewUser = (req,res)=>{
    const addedUser = {
        email: req.body.email,
        password: req.body.password
    };
    users.push(addedUser)
    res.status(201).send(addedUser);
    res.status(400).send("error");
};

module.exports = {getUser, addNewUser, getAllUsers};