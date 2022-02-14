import mongoose from 'mongoose';

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Connection with mongoDB OK");
    } catch (error) {
        console.log("Error in database connection,", error);
    }
}

export default {dbConnection};