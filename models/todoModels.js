const mongoose = require("mongoose");
const USER_DB = require("./userModels");

const todoSchema = mongoose.Schema({
    todoDesc:{
        type:String,
        required:[true,"the todo is required"],
        default : "empty todo"
    },
    isCompleted:{
        type:Boolean,
        required:false,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"USER_DB"
    }
},{timestamps:true});


module.exports = mongoose.model("TODOS",todoSchema);

