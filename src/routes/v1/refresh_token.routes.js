import express from "express" 
import { delete_token, refresh_token } from "../../controllers/refreshToken.controller.js";

const router = express.Router();

router.get("/",refresh_token);
router.delete("/",delete_token);

export default router;
