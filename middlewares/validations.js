const displayNameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
);
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  
  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!(/\S+@\S+\.\S+/).test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  
  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const categoriesValidations = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  next();
};
const postValidations = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });

  next();
};

module.exports = {
  displayNameValidation,
  emailValidation,
  passwordValidation,
  categoriesValidations,
  postValidations,
};
