const { Brand } = require("../db");

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

module.exports = addBrands;