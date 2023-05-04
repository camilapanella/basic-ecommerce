import { React } from "react";
import { Link } from "react-router-dom";

export default function Product({ id, name, image_url, price }) {
  return (
    <div>
      <img src={image_url} alt={name} />
      <div>
        <h4>{name}</h4>
        <h6 variant="h6">${price}</h6>
        <Link to={`/product/${id}`}>View</Link>
      </div>
    </div>
  );
}
