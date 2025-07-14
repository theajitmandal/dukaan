import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

// dukaan is database name (projectname)
const dbConnect = async() => {
    try{
        const connection = await mongoose.connect(MONGODB_URI || 'mongodb://127.0.0.1:27017/dukaan');
    // console.log(connection);
    if(connection) console.log("Connected to MongoDB");
    }catch(err){
        console.log(err)
        process.exit()
    }
}

export default dbConnect;