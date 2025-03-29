import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.connect(process.env.database);

const userDb = mongoose.connection;
userDb.on("open", () => {
    console.log("connection successful");
})
userDb.on("error", () => {
    console.log("Connect not succssful");
})

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 30,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})


const User = mongoose.model("User", user);

export default User;