const TeacherModel=require("../Models/TeacherModel")

// post
const CreateTeacher=async(req,res)=>{
    const newData=TeacherModel(req.body)
    const SaveData=await newData.save()
    if(SaveData){
        res.send(SaveData)
    }
}
// Read 

const ReadTeacher=async (req,res)=>{
    const getData=await TeacherModel.find()
    if(getData){
        res.send(getData)
    }
}

// read single data
const ReadSingleTeacher=async (req,res)=>{
    const getData=await TeacherModel.find( {_id: req.params.id})
    if(getData){
        res.send(getData)
    }
}

// Update

const UpdateTeacher=async (req,res)=>{
    const updateData=await TeacherModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send("Succes Update")
    }
}

// delete

const DeleteTeacher=async (req,res)=>{
    const removeDate= await TeacherModel.deleteOne({_id: req.params.id})

    if(removeDate){
        res.send("Succes Deleted")
    }
}
module.exports={CreateTeacher,ReadTeacher,ReadSingleTeacher,UpdateTeacher,DeleteTeacher}