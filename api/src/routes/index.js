const { Router } = require("express");
const products = require("./products.js");
const brands = require("./brands.js");
const router = Router();

// router.use('/recipes', recipes);
// router.use('/diets', types);
router.use("/products", products);
router.use("/brands", brands);

module.exports = router;