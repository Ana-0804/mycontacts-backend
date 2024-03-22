const express= require("express");
const errorhandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection.js");
const  dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

connectDb();
app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoute"));
app.use(express);


app.listen( port, () => {
console.log(`server running on ${port}`);
});
