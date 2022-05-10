const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;
mongoose.connect(config.mongoose.url).then(() => {
  console.log("Connected to MongoDB successfully");
  server = app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
});
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = error => {
  console.log(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
