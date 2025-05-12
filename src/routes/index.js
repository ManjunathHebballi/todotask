import express from "express"

import user from "./v1/user.routes.js"
import task from "./v1/task.routes.js"
import token from "./v1/refresh_token.routes.js"
const router = express.Router();

router.use('/v1/user', user);
router.use('/v1/task', task);
router.use('/v1/refresh_token', token);

export default router;