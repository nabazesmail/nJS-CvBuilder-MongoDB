// src/config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error.message);
  }
};

module.exports = connectToDatabase;
