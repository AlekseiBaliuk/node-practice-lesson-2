module.exports = (err, req, res, next) => {
  // console.log(res.statusCode);

  const statusCode = res.statusCode || 500;

  // console.log(err.stack)

  return res.status(statusCode).json({
    code: statusCode,
    error: err.stack,
  });
};
