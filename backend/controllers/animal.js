import animalModel from '../models/animal.js';

const registerAnimal = async (req, res) =>{
    if(!req.body.name || !req.body.race || !req.body.weight || !req.body.height || !req.body.health || !req.body.age || !req.body.health || !req.body.type || !req.body.owner) return res.status(400).send({message:"Incomplete data"});

    let schema = new animalModel({
        name:req.body.name,
        race:req.body.race,
        weight:req.body.weight,
        height:req.body.height,
        age:req.body.age,
        health:req.body.health,
        type:req.body.type,
        owner:req.body.owner
    });

    let result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

export default {registerAnimal};