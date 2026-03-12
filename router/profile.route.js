const {Router} = require("express");
const auth = require("../middleware/authorization");
const {getProfile} = require("../controller/profile.controller");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: User profile APIs
 */

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 */
router.get("/", auth, getProfile)

module.exports = router;