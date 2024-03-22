const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true , "Please add the contact name"],
    },
    email: {
        type : String,
        required : [true , "Please add the E-mail"],
    },
    number: {
        type : String,
        required : [true , "Please add the contact number"],
    },

},
    {
        timestamps : true,
    }
);

module.exports= mongoose.model("contact", ContactSchema);