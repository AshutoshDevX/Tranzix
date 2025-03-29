import { z } from 'zod';
import User from '../Model/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Account from '../Model/account.model.js';

const signUpBody = z.object({
    username: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string()
})

const signInBody = z.object({
    username: z.string().email(),
    password: z.string()
})

const updateBody = z.object({
    username: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()
})


export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(403).json({});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
}

export const userSignUp = async (req, res) => {
    const { username, firstname, lastname, password } = req.body;
    const { success } = signUpBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/incorrect inputs"
        })
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        username: username,
        firstname: firstname,
        lastname: lastname,
        password: hashedPass
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + (Math.random() * 10000).toFixed()
    })

    const token = jwt.sign({
        userId
    }, process.env.JWT_SECRET, { expiresIn: "20m" });

    res.status(200).json({
        message: "User created Successfully",
        token: token
    })
}

export const userSignIn = async (req, res) => {
    const { success } = signInBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const { username, password } = req.body;
    const user = await User.findOne({
        username: username,
    })

    const isPassCorrect = await bcrypt.compare(password, user.password);

    if (isPassCorrect) {
        const userId = user._id;
        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET, { expiresIn: "20m" });

        res.json({
            token: token
        })

        return;
    }

    res.status(411).json({
        message: "Error while logging in!"
    })

}

export const userDetails = async (req, res) => {
    const existingUser = await User.findOne({ _id: req.userId });

    const { _id, username, firstname, lastname } = existingUser;
    res.json({
        _id,
        username,
        firstname,
        lastname
    })
}

export const updateUser = async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "Updated successfully"
    })
}

export const getUser = async (req, res) => {
    const filter = req.query.filter || "";


    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        userId: req.userId,
        user: users.map(({ username, firstname, lastname, _id }) => ({
            username: username,
            firstname: firstname,
            lastname: lastname,
            _id: _id
        }))
    })
}