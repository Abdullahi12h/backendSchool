const studentModel = require("../Models/StudentAuthModel")
const bcrypt = require("bcryptjs")

const createstudent = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body

    const existEmail = await studentModel.findOne({ email })
    if (existEmail) {
      return res.status(400).json({ error: "Email already exists" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newData = new studentModel({
      name,
      phone,
      email,
      password: hashPassword
    })

    await newData.save()
    res.status(201).json(newData)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const existEmail = await studentModel.findOne({ email })
    if (!existEmail) {
      return res.status(400).json({ error: "Invalid email" })
    }

    const checkPassword = await bcrypt.compare(password, existEmail.password)
    if (!checkPassword) {
      return res.status(400).json({ error: "Invalid password" })
    }

    res.status(200).json({
      message: "Success login",
      student: {
        name: existEmail.name,
        phone: existEmail.phone,
        email: existEmail.email
      }
    })
  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
}

const readstudent = async (req, res) => {
  try {
    const students = await studentModel.find()
    res.status(200).json(students)
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

module.exports = { createstudent, studentLogin, readstudent }
