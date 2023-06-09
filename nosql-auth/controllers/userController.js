import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
    try {
      const foundUser = await userModel.findOne({ userName: req.body.userName });
  
      if (!foundUser) {
        return res.status(404).send("Username or Password is wrong!");
      }
  
      const isUserPasswordCorrect = bcrypt.compareSync(
        req.body.password.toString(),
        foundUser.password
      );
  
      if (!isUserPasswordCorrect) {
        return res.status(404).send("Username or Password is wrong!!");
      }
  
      const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      return res
        .cookie("session_token", token, {
          httpOnly: true,
        })
        .status(200)
        .send(`Hello, ${foundUser.userName}! You successfully logged in!`);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };

export const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10); //salt rounds -> 
        const hashedPassword  = bcrypt.hashSync(req.body.password.toString(), salt);
        const newUser = new userModel({
            ...req.body,
            password: hashedPassword,
            isAdmin: false, //this is so that the user cannot make himself as isAdmin: true
        });

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
    
        res.status(200).json(allUsers);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteAllUsers = async (req, res) => {
    try {
      const allUsers = await userModel.deleteMany({});
  
      res.status(200).json(allUsers);
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
    
        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findOneAndDelete({userName: req.body.userName});
    
        const {pasword, ...remainingUserData} = deletedUser._doc;

        res.status(200).json(remainingUserData);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { userName: req.params.userName }, 
            { $set: req.body },
            {new: true}
        );
    
        res.status(200).json(updatedUser);

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
