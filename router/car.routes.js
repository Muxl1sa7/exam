const { Router } = require("express");

const auth = require("../middleware/authorization");
const role = require("../middleware/role.middleware");
const validateCar = require("../middleware/car.validator.middleware");

const {
  addCar,
  getAllCars,
  getCarsByBrand,
  getOneCar,
  updateCar,
  deleteCar
} = require("../controller/car.controller");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Cars APIs
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: List of all cars
 */
router.get("/", getAllCars);

/**
 * @swagger
 * /cars/brand/{brandId}:
 *   get:
 *     summary: Get cars by brand
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: brandId
 *         required: true
 *         schema:
 *           type: string
 *         description: Brand ID
 *     responses:
 *       200:
 *         description: Cars filtered by brand
 */
router.get("/brand/:brandId", getCarsByBrand);

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Get one car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Single car
 */
router.get("/:id", getOneCar);

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Add new car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               carName:
 *                 type: string
 *               price:
 *                 type: number
 *               brandInfo:
 *                 type: string
 *               motor:
 *                 type: string
 *               year:
 *                 type: number
 *               color:
 *                 type: string
 *               distance:
 *                 type: number
 *               gearbox:
 *                 type: string
 *               tonirovka:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Car created successfully
 */
router.post("/", auth,role("admin"), validateCar, addCar);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Update car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               carName:
 *                 type: string
 *               price:
 *                 type: number
 *               brandInfo:
 *                 type: string
 *               motor:
 *                 type: string
 *               year:
 *                 type: number
 *               color:
 *                 type: string
 *               distance:
 *                 type: number
 *               gearbox:
 *                 type: string
 *               tonirovka:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Car updated successfully
 */
router.put("/:id", auth, role("admin"), validateCar, updateCar);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Delete car
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car ID
 *     responses:
 *       200:
 *         description: Car deleted
 */
router.delete("/:id", auth, role("admin"), deleteCar);

module.exports = router;