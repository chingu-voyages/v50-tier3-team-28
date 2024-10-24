require('dotenv').config();

const mongoose = require('mongoose');

const connection = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using Existing Connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database');
  }
};
module.exports = connectDB;
