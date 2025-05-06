import express from "express"

import user from "./v1/user.routes.js"
import task from "./v1/task.routes.js"

const router = express.Router();

router.use('/v1/user', user);
router.use('/v1/task', task);

export default router;