const mongoose = require("mongoose")
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const AssignmentScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    AssignmentTitle: {
        type:String,
        required:true
    },
    Course:{
        type:String,
        required:true
    },
    Class:{
        type:String,
        required:true
    },
    
    prImage: {
        type:String,
        required:true

    },
    status: {
    type: String,
    enum: ["Completed", "In Progress", "pending"], 
    default: "pending",
  }
  


},
{timestamps: true}
)

module.exports = mongoose.model("Assignment", AssignmentScheme)