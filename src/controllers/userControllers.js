const { userServices } = require('../services');

const registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Campos incompletos.' });
  }

  try {
    const user = await userServices.createUser(email, password, role);
    res.status(201).json({
      message: 'Usuario creado exitosamente.',
      user,
    });
  } catch (error) {
    console.log(error.message);
    if (error.code === '23505') {
      return res
        .status(400)
        .json({ message: 'El correo electronico ya esta en uso.' });
    }
    res.status(500).json({ message: 'Error al registrar el usuario.' });
  }
};

const loginUser = async (req, res) => {};

module.exports = { registerUser, loginUser };
