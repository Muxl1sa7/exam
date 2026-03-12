const {Router} = require("express");
const auth = require("../middleware/authorization");
const {saveCar} = require("../controller/saved.controller");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Saved Cars
 *   description: Saved cars APIs
 */

/**
 * @swagger
 * /saved:
 *   post:
 *     summary: Save car
 *     tags: [Saved Cars]
 */
router.post("/", auth, saveCar)

/**
 * @swagger
 * /saved:
 *   get:
 *     summary: Get saved cars
 *     tags: [Saved Cars]
 */
router.get("/", auth, getSavedCars)

/**
 * @swagger
 * /saved/{id}:
 *   delete:
 *     summary: Remove saved car
 *     tags: [Saved Cars]
 */
router.delete("/:id", auth, deleteSavedCar)
module.exports = router;