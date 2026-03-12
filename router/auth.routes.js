const {Router} = require("express");

const {
register,
verify,
login,
logout,
refresh,
forgotPassword,
changePassword,
profile
} = require("../controller/auth.controller");

const auth = require("../middleware/authorization");

const router = Router();
router.get("/profile", auth, profile)

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 */
router.post("/register", register)

/**
 * @swagger
 * /auth/verify:
 *   post:
 *     summary: Verify OTP
 *     tags: [Auth]
 */
router.post("/verify", verify)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 */
router.post("/login", login)

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Auth]
 */
router.post("/logout", logout)

/**
 * @swagger
 * /auth/refresh:
 *   get:
 *     summary: Refresh access token
 *     tags: [Auth]
 */
router.get("/refresh", refresh)

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Send OTP to email
 *     tags: [Auth]
 */
router.post("/forgot-password", forgotPassword)

/**
 * @swagger
 * /auth/change-password:
 *   post:
 *     summary: Change password
 *     tags: [Auth]
 */
router.post("/change-password", auth, changePassword)

module.exports = router