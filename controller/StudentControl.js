const StudentModel=require("../Models/StudentModel")

// post
const CreateStudent=async(req,res)=>{
    const newData=StudentModel(req.body)
    const SaveData=await newData.save()
    if(SaveData){
        res.send(SaveData)
    }
}
// Read 

const ReadStudent=async (req,res)=>{
    const getData=await StudentModel.find()
    if(getData){
        res.send(getData)
    }
}

// read single data
const ReadSingleStudent=async (req,res)=>{
    const getData=await StudentModel.find( {_id: req.params.id})
    if(getData){
        res.send(getData)
    }
}

// Update

const UpdateStudent=async (req,res)=>{
    const updateData=await StudentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send("Succes Update")
    }
}

// delete

const DeleteStudent=async (req,res)=>{
    const removeDate= await StudentModel.deleteOne({_id: req.params.id})

    if(removeDate){
        res.send("Succes Deleted")
    }
}
module.exports={CreateStudent,ReadStudent,ReadSingleStudent,UpdateStudent,DeleteStudent }