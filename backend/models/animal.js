import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    name:String,
    race:String,
    weight:Number,
    height:Number,
    health:String,
    age:Number,
    type:String,
    owner:{type:mongoose.Schema.ObjectId, ref:"users"},
    registerDate:{type:Date, default:Date.now}
});

const animal = mongoose.model("animals", animalSchema);

export default animal;