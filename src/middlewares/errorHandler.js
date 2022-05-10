exports.errorHandler = (err, req, res, _) => {
  const error = err;
  if (error.code === 11000) {
    error.statusCode = 400;
    /*
    for (let p in error.keyValue) {
      error.message = `${p} has to be unique`;
    }
  }
  */
    error.message = "One of your keys has to be unique";
  }
  if (error.kind === "ObjectId") {
    error.statusCode = 404;
    error.message = `The ${req.originalUrl} is not found because of wrong ID`;
  }
  res.status(error.statusCode).json({
    status: "fail",
    message: error.message,
  });
};
