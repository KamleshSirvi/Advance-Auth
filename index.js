const dotenv = require("dotenv")
const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/user-routes")
const cookieParser = require('cookie-parser')

const app = express();
dotenv.config();

// creating middleware for router
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(5000);
    console.log("connection establish successfull")
}).catch((err) => {
    console.log(err);
})