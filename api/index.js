const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const UserModel = require('./models/user.js');
require('dotenv').config();

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret='fasefraw4r5r3wq45gfndgfdfb';

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        const userDoc = await UserModel.create({
            name, 
            email, 
            password: bcrypt.hashSync(password, bcryptSalt)
        });

        res.json(userDoc);
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(422).json({ error: err.message ||'Error creating user' });
    }
});
app.post('/login',async (req,res) =>{
    const{email,password}=req.body;
   const userDoc=await UserModel.findOne({email});
   if(userDoc){
    const passOk=bcrypt.compareSync(password, userDoc.password)
    if(passOk){
        jwt.sign({email:userDoc.email, id:userDoc.id},jwtSecret,{},(err,token) =>{
            if(err) throw err;
            res.cookie('token',token).json('userDoc');
        });
      
    }else{
        res.status(422).json('pass not ok');
    }
   }else{
    res.json('not found');
   }
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
