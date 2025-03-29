import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.connect(process.env.database);

const accountDb = mongoose.connection;

accountDb.on("open", () => {
    console.log("connection successful");
})

accountDb.on("error", () => {
    console.log("connection failed");
})

const account = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model("Account", account);

export default Account;