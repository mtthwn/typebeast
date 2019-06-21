function index(req, res) {
  res.status(200).json({
    message: 'welcome to the auth routes'
  });
}

module.exports = {
  index
};
