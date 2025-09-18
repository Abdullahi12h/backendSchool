// routes/auth.js (kuwa kale oo jira isku dar)
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Student = require('../Models/StudentModel');

// student login
router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    // hel student by name
    const student = await Student.findOne({ Name: name });
    if (!student) return res.status(401).json({ message: 'Invalid credentials' });

    // isbarbar dhig password (hashed)
    const match = await bcrypt.compare(password, student.Password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    // Ha soo celin Password; model-ka toJSON waxa uu tirtiraa
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
