const {Router} = require("express");

const {
addBrand,
getAllBrands,
updateBrand,
deleteBrand
} = require("../controller/brand.controller");

const auth = require("../middleware/authorization");
const role = require("../middleware/role.middleware");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: Brand APIs
 */

/**
 * @swagger
 * /brands:
 *   get:
 *     summary: Get all brands
 *     tags: [Brands]
 */
router.get("/", getAllBrands)

/**
 * @swagger
 * /brands:
 *   post:
 *     summary: Add brand
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 */
router.post("/", auth, role("admin"), addBrand)

/**
 * @swagger
 * /brands/{id}:
 *   put:
 *     summary: Update brand
 *     tags: [Brands]
 */
router.put("/:id", auth, role("admin"), updateBrand)

/**
 * @swagger
 * /brands/{id}:
 *   delete:
 *     summary: Delete brand
 *     tags: [Brands]
 */
router.delete("/:id", auth, role("admin"), deleteBrand)

module.exports = router