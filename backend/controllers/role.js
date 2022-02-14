import roleModel from '../models/role.js';

const roleRegister = async (req, res) =>{
    if(!req.body.name) return res.status(400).send({message:"Incomplete data"});

    let schema = new roleModel({
        name:req.body.name
    });

    let result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

export default {roleRegister};