const User = require('../models/User');

const registerUser = async (req,res)  => {
    try{
        const findUser = await User.findOne({fullname: req.body.fullname});

        if(!findUser) {
            const resp = await User.create({fullname: req.body.fullname});
            res.status(200).send({message: "User registered",data: resp});
        }
        else {
            res.status(500).send({error: "User already Exist"});
        }
    }catch(err){ 
        console.log(err.message);
    }
}
module.exports = {
    registerUser,
}