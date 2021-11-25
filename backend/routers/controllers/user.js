const { user } = require('../userDB')

const getAllUsers = (req, res)=>{
    res.send(user);
}

const getUser = (req, res)=>{
    const foundUser = user.find(
        ({email, password})=>
        email === req.body.email && password === req.body.password
    );
    //console.log(foundUser);
    if(foundUser)res.send(foundUser);
    else
    res.status(404).send("couldn't find user");
};

const addNewUser = (req,res)=>{
    const addedUser = {
        email: req.body.email,
        password: req.body.password,
        degree: req.body.degree,
        specilization: req.body.specilization,
        GPA: req.body.GPA
    };
    console.log(addedUser)
    user.push(addedUser)
    res.status(201).send(addedUser);
    res.status(400).send("error");
};

module.exports = {getUser, addNewUser, getAllUsers};