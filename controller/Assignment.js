const AssignmentModel =require("../Models/Assignment")


const createAssignment = async (req, res) => {
    try {
        const { name, date, AssignmentTitle, Course,Class } = req.body
        const newData = AssignmentModel({
            name: name,
            date: date,
            AssignmentTitle:AssignmentTitle,
            Course:Course,
            Class:Class,
            prImage: req.file.filename,
        })
        await newData.save()
        res.send(newData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
//read
const readAssignment = async(req,res) => {
    try{
        const {date} = req.body || {}

        let filterData = {}

        if(date){
            filterData = {date}
        }
        const readData = await AssignmentModel.find(filterData)
        if(readData){
            res.send(readData)
        }
    } catch(error) {
        res.status(400).json({message: error.message})

    }
}
//read-single

const readSingleAssignment = async(req,res) => {
    try{
        const getData = await AssignmentModel.find({_id: req.params.id})
        if(getData){
        res.send(getData)
    }
    } catch(error){
        res.status(400).json({message: error.message})

    }
}

//update

const updateAssignment = async (req, res) => {
  try {
    const { name, date, AssignmentTitle, Course, Class } = req.body;

    // samee object xogta cusub
    const updateData = {
      name,
      date,
      AssignmentTitle,
      Course,
      Class,
    };

    // haddii sawir cusub la upload gareeyey
    if (req.file) {
      updateData.prImage = req.file.filename;
    }

    const result = await AssignmentModel.updateOne(
      { _id: req.params.id },
      { $set: updateData }
    );

    if (result.modifiedCount > 0) {
      res.send("success update");
    } else {
      res.status(404).json({ message: "Assignment not found or no changes" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// delete

const deleteAssignment = async(req,res) => {
    try{
        const deleteData = await AssignmentModel.deleteOne({_id:req.params.id})
        if(deleteData){
            res.send("succes delete")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}
module.exports = { createAssignment, readAssignment, readSingleAssignment, updateAssignment,deleteAssignment }
