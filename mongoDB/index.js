const mongoose = require('mongoose');
const User = require('./model/user');
const mongoUri = "mongodb+srv://dakshathadathu:lUXmWGSCygiu65Tp@cluster0.5tp21wn.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(mongoUri);
    console.log('mongodb connected');
} catch (error) {
    console.log(error);
}

async function createUser(newuser) {
    const user = new User(newuser); //user document created
    const data = await user.save(); // user saved in db
    console.log(data);
}

async function findUser(email) {
    const users = await User.find({email});
    console.log(users);
}

async function updateMarks(userId, marks) {
    const user = await User.findById(userId);
    user.marks = marks;
    const updatedUser = await user.save();
    console.log(updatedUser);
}

async function deleteUser(userId) {
    const USER = await User.findById(userId);
    await USER.deleteOne();
}
deleteUser('6467b056eafc967487a9ffcb');
createUser({email: 'sek@gmail.com', password: '1234', marks: 24});
findUser('kas@gmail.com');

updateMarks('6467b056eafc967487a9ffcb', 20);
//comparision operators
User.find({email: {$regex: 's'}});