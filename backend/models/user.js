import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:String,
    birthdate:Date,
    roleId:{type:mongoose.Schema.ObjectId, ref="roles"}
});

const user = mongoose.model("users", userSchema);

export default user;