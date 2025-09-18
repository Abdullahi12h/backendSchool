const adminModel = require("../Models/Adminmodel")
const bcrypt = require("bcryptjs")   // ✅ sax spelling
const jwt = require("jsonwebtoken")

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // check if email already exists
    const existEmail = await adminModel.findOne({ email })
    if (existEmail) {
      return res.status(400).json({ error: "the email is already" })
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10)

    const newData = new adminModel({
      name,
      email,
      password: hashPassword,
    })

    await newData.save()
    res.json(newData)
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error.message })
  }
}

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    // email-check
    const existEmail = await adminModel.findOne({ email })
    if (!existEmail) {
      return res.status(400).json({ error: "invalid email" })
    }

    const checkPassword = await bcrypt.compare(password, existEmail.password)
    if (!checkPassword) {
      return res.status(400).json({ error: "invalid password" })
    }

    // token
    const token = jwt.sign(
      { id: existEmail._id, name: existEmail.name, email: existEmail.email, role: existEmail.role },
      "mysecret",   // sax env key
      { expiresIn: "1h" }
    )

    res.json({
      message: "success login",
      admin: {
        name: existEmail.name,
        email: existEmail.email,
        role: existEmail.role,
      },
      token,
    })
  } catch (error) {
    res.status(500).json({ error: "server error", details: error.message })
  }
}

module.exports = { createAdmin, adminLogin }
