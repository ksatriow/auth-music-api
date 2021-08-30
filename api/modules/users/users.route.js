const router = require("express").Router();
const { authorization } = require("../../config/middlewares/authorization");

const {registerUserController,getUsersController,loginUserController,updateUserController,deleteUserController} = require("./users.controller");

router.route("/").get(authorization,getUsersController);
router.route("/register").post(registerUserController);
router.route("/login").post(loginUserController);
router.route("/update").put(authorization,updateUserController);
router.route("/delete").delete(authorization,deleteUserController);
module.exports = router;