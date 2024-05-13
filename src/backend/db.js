// proper executable code
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const jwt = require('jsonwebtoken');
const jwtSecret="12asdfgh"

const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/registerd-users")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    });
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const User = mongoose.model("User", userSchema);

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email: email });
//         if (!user) {
//             res.json("notexist");
//             return;
//         }
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (passwordMatch) {
//             res.json("exist");
//             // res.status(200).json(email);
//         } else {
//             res.json("notexist");
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist' });
        }
        else {
            console.log("id", user)
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id}, jwtSecret, { expiresIn: '1h' });
        // const token = jwt.sign({ id: user._id, name:user.email, password:user.password}, config.jwtSecret, { expiresIn: '1h' });
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                
                
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



// app.post("/account", async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         const user = await User.findOne({ email: email });
//         if (user) {

//             res.json("exist");

//         } else {

//             const hashedPassword = await bcrypt.hash(password, 10);

//             const newUser = new User({
//                 name: name,
//                 email: email,
//                 password: hashedPassword,
//             });
//             await newUser.save();
//             res.json("notexist");
//         }
//     } catch (e) {
//         res.json("fail");
//     }
// });


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


app.listen(8002, () => {
    console.log("port connected");

});





























