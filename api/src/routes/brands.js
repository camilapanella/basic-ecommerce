const express = require("express");
const { Router } = require("express");
const { Brand } = require("../db");

const router = Router();

const addBrands = async () => {
  const types = [
    {
      name: "Nike",
      logo_url:
        "https://w7.pngwing.com/pngs/224/696/png-transparent-nike-logo-movement-brands-black.png",
    },
    {
      name: "Adidas",
      logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
    {
      name: "Vans",
      logo_url:
        "https://www.creativosonline.org/wp-content/uploads/2022/02/Logo-VANS.png",
    },
    {
      name: "Puma",
      logo_url:
        "https://st.depositphotos.com/38540216/59631/v/450/depositphotos_596311672-stock-illustration-puma-logo-black-symbol-with.jpg",
    },
    {
      name: "New Balance",
      logo_url:
        "https://e7.pngegg.com/pngimages/256/226/png-clipart-logo-new-balance-brand-shoe-trademark-new-balance-logo.png",
    },
    {
      name: "Fila",
      logo_url:
        "https://1000marcas.net/wp-content/uploads/2019/12/logo-Fila.png",
    },
  ];

  const newList = await Brand.bulkCreate(types);
  return newList;
};

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
