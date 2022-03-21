const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = jwtGenerator({ id: user.id, email });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
