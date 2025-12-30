import { Router } from "express";
import * as controller from "../controllers/user.controller.js";

const router = Router();

router.post("/addUser", controller.createUser);
router.get("/showAllUsers", controller.getUsers);
router.get("/showUser/:id", controller.getUser);
router.put("/updateUser/:id", controller.updateUser);
router.delete("/deleteUser", controller.deleteUser);

export default router;
