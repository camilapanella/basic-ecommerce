const express = require("express");
const { Router } = require("express");
const { Brand } = require("../db");
const addBrands = require("../seeds/brand-seed")

const router = Router();

router.get("/", async (req, res) => {
  const brands = await Brand.findAll();
  try {
    if (!brands.length) {
      var listBrands = await addBrands();
      return listBrands;
    }
    res.status(200).send(brands);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { name, logo_url } = req.body;
  try {
    if (!name) return res.status(400).send("Mandatory data missing");
    const newBrand = await Brand.create({ name, logo_url });
    res.status(200).send("created successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Brand.destroy({ where: { id: id } });
  res.status(200).send("success");
});

module.exports = router;
