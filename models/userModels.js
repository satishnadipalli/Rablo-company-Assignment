const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require:[true,"user cant't be empty"]
    },
    email:{
        type:String,
        require:[true,"the email should be requied"]
    },
    password:{
        type:String,
        require:[true,"password must required"]
    }
});

module.exports = mongoose.model("USER_DB",userSchema);