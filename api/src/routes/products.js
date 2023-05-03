const express = require("express");
const { Router } = require("express");
require("dotenv").config();
const { Product, Brand } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  const data = await Product.findAll();
  res.status(200).send(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    let prod = await Product.findByPk(id, { include: Brand });
    if (prod) return res.status(200).send([prod]);
    return res.status(404).send("Product not found");
  }
});

router.post("/", async (req, res) => {
  const { name, description, price, image_url, brandId } = req.body;
  try {
    if (!name) return res.status(400).send("Mandatory data missing");
    const newProduct = await Product.create({
      name,
      description,
      price,
      image_url,
    });
    let brnd = await Brand.findOne({ where: { id: brandId } });
    newProduct.setBrand(brnd);
    res.status(200).send("created successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { name, description, price, image_url } = req.body;
  const { id } = req.params;
  try {
    const updated = await Product.update({
      where: { id: id },
      name,
      description,
      price,
      image_url,
    });
    res.status(200).send(updated);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("success");
});
module.exports = router;
