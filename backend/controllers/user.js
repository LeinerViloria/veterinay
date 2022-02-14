import roleModel from '../models/user.js';

const registerUser = async (req, res) => {
    if(!req.body.name || !req.body.age || !req.body.roleId) return res.status(400).send({message:"Incomplete data"});

    let schema = new roleModel({
        name:req.body.name,
        age:req.body.age,
        roleId:req.body.roleId,
        dbStatus:true
    });

    let result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

export default {registerUser};