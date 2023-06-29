import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new userModel({
            userName: req.body.userName,
            password: req.body.password
        })
    
        await newUser.save();

        const {password, ...remainingUserData} = newUser._doc;

        res.status(201).json(remainingUserData);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({}, {password: 0});
    
        res.status(201).send(allUsers);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findOne(
            {userName: req.body.userName},
            {password: 0}
            );
    
        res.status(201).send(user);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findOneAndDelete({userName: req.body.userName});
    
        const {pasword, ...remainingUserData} = user._doc;

        res.status(201).send(remainingUserData);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { userName: req.body.user }, 
            { $set: req.body },
            {new: true}
        );
    
        res.status(201).send(updatedUser);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

//COUNT
export const countUsers = async (req, res) => {
    try {
        const countedUsers = await userModel.countDocuments({userName: 'Kristiana'}, {password: 0});
    
        res.status(201).send(countedUsers);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

//SORT
export const sortUsers = async (req, res) => {
    try {
        const sortedUsers = await userModel.sort({userName: 'asc'});
    
        res.status(201).send(sortedUsers);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

//LIMIT
export const limitOfSortedUsers = async (req, res) => {
    try {
        const limitOfSortedUsers = await userModel.sort({userName: 'asc'}).limit(10);
    
        res.status(201).send(limitOfSortedUsers);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};