const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const jwtSecret = '12asdfgh'; // Replace with your actual secret key

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/registerd-users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(() => {
    console.error('MongoDB connection failed');
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// Middleware to verify the JWT token
function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is invalid' });
  }
}

// Login API
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// account registration api
app.post('/account', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({name, email, password: hashedPassword });
        await newUser.save();

        // Create a JWT token
        const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: '1h' });

        res.json({
            token,
            user: {
                id: newUser._id,
                name:newUser.name,
                email: newUser.email
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Account Deletion API
app.delete('/delete-account', verifyToken, async (req, res) => {
  try {
    // Get the user ID from the verified token
    const userId = req.user.id;

    // Your delete account logic here
    // Example: Delete the user with the given user ID
    await User.findByIdAndDelete(userId);

    res.status(200).json({ msg: 'Account deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// app.delete('/delete-account', async (req, res) => {
//     try {
//         const userId = req.user.id; // Assuming you have middleware to extract the user ID from the JWT token

//         // Check if the user exists
//         const user = await User.findById(userId);

//         if (!user) {
//             // User does not exist, return an error response
//             return res.status(404).json({ msg: 'Account does not exist' });
//         }

//         // Delete the user's record
//         await User.findByIdAndDelete(userId);

//         // Return a success response
//         res.json({ msg: 'Account deleted successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });



const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
