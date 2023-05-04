import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct, getBrands } from "../../actions/actions";

export function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Name is required!";
  if (!input.description)
    errors.description = "A summary of the product is required!";
  if (input.price < 0 || input.price > 1000000)
    errors.price = "The price must be a number between 0 and a million!";
  return errors;
}

export default function Form(props) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands);
  const products = useSelector((state) => state.products);

  const [input, setInput] = useState({
    name: "",
    description: "",
    image_url: "",
    brandId: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProduct(input));
    alert("Product successfully created");
    setInput({
      name: "",
      description: "",
      image_url: "",
      brandId: "",
      price: "",
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      brandId: e.target.value
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (
      products.find(
        (prod) => prod.name.toLowerCase() === e.target.value.toLowerCase()
      )
    ) {
      setErrors({
        ...input,
        [e.target.name]: "This product already exists",
      });
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      brandId: "",
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>¡Create a new product!</h3>
      <div>
        <input
          type="text"
          value={input.name}
          name="name"
          placeholder="Add name..."
          onChange={(e) => handleChange(e)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <textarea
          type="text"
          value={input.description}
          name="description"
          placeholder="Description of your product..."
          onChange={(e) => handleChange(e)}
        />
        {errors.description && <span>{errors.description}</span>}
      </div>

      <div>
        <input
          type="number"
          value={input.price}
          name="price"
          placeholder="Price..."
          onChange={(e) => handleChange(e)}
        />
        {errors.price && <span>{errors.price}</span>}
      </div>

      <input
        type="text"
        value={input.image_url}
        name="image_url"
        placeholder="Image url"
        onChange={(e) => handleChange(e)}
      />

      <select defaultValue="Brands" onChange={(e) => handleSelect(e)}>
        <option disabled>Brand</option>
        {brands?.map((brand) => (
          <option key={brand.name} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <div>
        {input.brandId ?
          <div>
            Reset brand
            <input
              type="button"
              onClick={() => handleDelete()}
              value="X"
            />
          </div>
        : null}
      </div>
      {!Object.keys(errors).length ? (
        <button disabled={!input.name || !input.description} type="submit">
          Submit
        </button>
      ) : null}
    </form>
  );
}
