const mongoose = require("mongoose")

const StudentAuthoSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model("studentAuthorization", StudentAuthoSchema)
