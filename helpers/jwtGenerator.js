const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = (payload = {}) => jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);
