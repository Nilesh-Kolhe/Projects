const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin-0:admin0@mern-stack-db.zijgsnb.mongodb.net/test_db?retryWrites=true&w=majority")
    .then(res => console.log("Success ! "))
    .catch(err => console.log("Error: ", err));

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
});

const todoModel = mongoose.model('todos', todoSchema);

// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/todos', async (req, res) => {
    const todos = await todoModel.find();
    console.log("Server Response: ", todos);
    res.json(todos);
});