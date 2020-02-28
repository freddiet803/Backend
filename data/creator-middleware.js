module.exports = (req, res, next) => {
  const userType = req.body;

  if (userType.user_id == 1) {
    next();
  } else {
    res
      .status(400)
      .json({ message: 'You are not authorized to create content' });
  }
};
