const { Router } = require("express");
const {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  logout
} = require("../controllers/user.controller");
const authorization = require("../middlewares/auth");

const router = Router();

router.get("/", authorization, getAllUser);
router.get("/:id", getUser);
router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
