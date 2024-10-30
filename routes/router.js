const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.indexGet);
router.get("/new", controller.createMessageGet);
router.post("/new", controller.createMessagePost);
router.get("/message/:msgID", controller.messageGet);

module.exports = router;
