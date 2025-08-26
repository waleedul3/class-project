// Script to make a user an admin
require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/db');

// Connect to database
connectDB();

// Function to make a user an admin by email
async function makeAdmin(email) {
  try {
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      console.error(`User with email ${email} not found`);
      process.exit(1);
    }
    
    // Update user to admin
    user.isAdmin = true;
    await user.save();
    
    console.log(`User ${user.name} (${user.email}) is now an admin`);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Function to make the first registered user an admin
async function makeFirstUserAdmin() {
  try {
    // Find the first user (sorted by registration date)
    const firstUser = await User.findOne().sort({ date: 1 });
    
    if (!firstUser) {
      console.error('No users found in the database');
      process.exit(1);
    }
    
    // Update user to admin
    firstUser.isAdmin = true;
    await firstUser.save();
    
    console.log(`First user ${firstUser.name} (${firstUser.email}) is now an admin`);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Get email from command line arguments
const email = process.argv[2];

if (email) {
  makeAdmin(email);
} else {
  makeFirstUserAdmin();
}