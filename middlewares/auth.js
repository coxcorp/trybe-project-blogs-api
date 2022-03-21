const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decoded.data;

    next();
  } catch (e) {
    if (e.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next(e);
  }
};