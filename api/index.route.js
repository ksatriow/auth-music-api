const router = require("express").Router();
const userRouter = require("./modules/users/users.route");
const musicsRouter = require("./modules/musics/musics.route");

router.use("/user",userRouter);
router.use("/music",musicsRouter);

module.exports = router;