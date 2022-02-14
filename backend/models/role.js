import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name:String
});

const role = mongoose.model("roles", roleSchema);

export default role;