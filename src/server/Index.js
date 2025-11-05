const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

// Routes
const authRoutes = require('./routes/auth');  // adjust path
app.use('/api/auth',authRoutes);  // now routes are accessible like /api/auth/signup

app.listen(5000, () => console.log("Server running on port 5000"));
