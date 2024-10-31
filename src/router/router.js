const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.get("/user", UserController.getAll);
router.get("/user/:id", UserController.getOne);
router.delete("/user/:id", UserController.delete);
router.post("/user", UserController.create);
router.puy("/user/:id", UserController.update);
