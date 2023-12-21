const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

const registerUser = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res
        .status(400)
        .send({ message: 'User with this email already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      'booking-jwt-secret',
      {
        expiresIn: '1h',
      }
    );

    newUser['token'] = token;

    res.status(200).send({
      message: 'User registered successfully',
      data: newUser,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        'booking-jwt-secret',
        { expiresIn: '1h' }
      );

      return res.status(200).send({ message: 'Login successful', token });
    } else {
      return res.status(401).send({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
