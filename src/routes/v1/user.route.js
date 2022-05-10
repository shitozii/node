const express = require("express");
const auth = require("../../middlewares/auth");
const userController = require("../../controllers/user.controller");

const router = express.Router();
router.route("/").post(auth.verifyAdmin, userController.createUser).get(auth.verifyAdmin, userController.getUsers);
router
  .route("/:userId")
  .get(auth.verifyAdmin, userController.getUser)
  .patch(auth.verifyAdmin, userController.updateUser)
  .delete(auth.verifyAdmin, userController.deleteUser);
module.exports = router;
