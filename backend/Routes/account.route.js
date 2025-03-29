import express from 'express';
import { getBalance, transferAmount } from '../Controller/account.controller.js';
import { authenticateUser } from '../Controller/user.controller.js';


const router = express.Router();

router.get("/", authenticateUser, getBalance);

router.post("/transfer", authenticateUser, transferAmount);

export default router;  