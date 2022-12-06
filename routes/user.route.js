const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middleware/auth")

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login)
router.post("/activate", userCtrl.activateEmail)
router.post("/refresh_token",   userCtrl.getAccessToken);
router.get("/infor",   auth, userCtrl.getUserInfor); 

module.exports = router;
