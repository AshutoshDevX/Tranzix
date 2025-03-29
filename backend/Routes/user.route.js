import express from 'express'
import { authenticateUser, getUser, updateUser, userDetails, userSignIn, userSignUp } from '../Controller/user.controller.js';

const router = express.Router();


router.post("/signup", userSignUp);

router.post("/signin", userSignIn);

router.get("/", authenticateUser, userDetails)
router.put("/", authenticateUser, updateUser);

router.get("/bulk", authenticateUser, getUser);

export default router;