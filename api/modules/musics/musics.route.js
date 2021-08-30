const router = require("express").Router();

const { createMusicController,getMusicsController,getMusicByIdController,updateMusicController,deleteMusicByIdController,deleteMusicController } = require("./musics.controller");
const { authorization } = require("../../config/middlewares/authorization");


router.route("/create").post(authorization,createMusicController);
router.route("/").get(authorization,getMusicsController);
router.route("/:music_id").get(authorization,getMusicByIdController);
router.route("/update/:music_id").put(authorization,updateMusicController);
router.route("/delete/:music_id").delete(authorization,deleteMusicByIdController);
router.route("/delete").delete(authorization,deleteMusicController);

module.exports = router;