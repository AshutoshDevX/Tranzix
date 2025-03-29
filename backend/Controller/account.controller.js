import Account from "../Model/account.model.js";
import mongoose from "mongoose"
export const getBalance = async (req, res) => {
    const account = await Account.findOne({ userId: req.userId });
    res.status(200).json({
        balance: account.balance
    })
}


export const transferAmount = async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId });

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }


    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer Successful"
    });
};
