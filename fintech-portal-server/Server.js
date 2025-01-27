const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const otpRoutes = require('./routes/otp');
// const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/otp', otpRoutes);
// app.use('/user', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_FRONTIERNEXT_DB_URI)
    .then(res => console.log("Connected to MongoDB !"))
    .catch(err => console.log("Error Connecting to MongoDB ", err));

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
});

const enquiriesSchema = new mongoose.Schema({
    name: String,
    type: String,
    contact: Number,
    email: String,
});

const usersSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    role: Number
});

const todoModel = mongoose.model('todos', todoSchema);
const enquiriesModel = mongoose.model('enquiries', enquiriesSchema);
const usersModel = mongoose.model('users', usersSchema);

// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/todos', async (req, res) => {
    const todos = await todoModel.find();
    res.json(todos);
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await usersModel.findOne({
        email: email,
        password: password
    });
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).send("Incorrect Credentials");
    }
});

app.post('/submitEnquiry', async (req, res) => {
    const { firstName, lastName, type, email, contact } = req.body;
    console.log('First Name: ', firstName, ' Last Name: ', lastName, ' Type', type, ' Email: ', email, ' Contact: ', contact);

    const enquiry = new enquiriesModel({
        firstName: firstName,
        lastName: lastName,
        type: type,
        email: email,
        contact: contact
    });

    enquiry
        .save()
        .then(enquirySaved => {
            // res.status(200).send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
            res.status(201).json({
                message: 'Enquiry saved successfully !',
                post: enquirySaved
            });
        })
        .catch(error => {
            console.log('Error saving enquiry', error);
            res.status(error?.status || 400).send(error?.message || 'something went wrong');
        });
});

app.get('/getAllEnquiries', async (req, res) => {
    const enquiries = await enquiriesModel.find();
    res.json(enquiries);
});
