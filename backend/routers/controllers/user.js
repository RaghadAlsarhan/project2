const { user } = require('../userDB')

const getAllUsers = (req, res)=>{
    res.send(user);
}

const getUser = (req, res)=>{
    console.log("Inside Login");
    console.log(req.body);
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
        id: req.body.id,
        email: req.body.email,
        password: req.body.password
    };
    console.log(req.body.email)
    const findUser = user.find((res)=>{
        return  res.email === req.body.email
    })
    console.log(findUser)
    if(!findUser){
     user.push(addedUser)
     res.send(user)
    }else{
        res.send("user is already exsist");
    }
};

module.exports = {getUser, addNewUser, getAllUsers};