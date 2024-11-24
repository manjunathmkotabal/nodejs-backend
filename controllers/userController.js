import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered !");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if(user) {
        res.status(201).json({_id: user.id, email: user.email});
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const user = await User.findOne({ email });
    if(user && (user.password === password)) {
        res.status(200).json({_id: user.id, email: user.email});
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const user = await User.findOne({ email });
    if(user && (user.password === password)) {
        res.status(200).json({_id: user.id, email: user.email});
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
    res.json({message: "Current user information"});
});

export { registerUser, loginUser, currentUser };