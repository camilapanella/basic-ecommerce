import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById, clearDetail } from "../../actions/actions";
import Loading from "../Loading/Loading";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));
    return () => dispatch(clearDetail());
  }, [dispatch, id]);

  if (details.length) {
    return (
      <div>
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
          <img src={details[0].image_url} alt="" />
          <h2>{details[0].name}</h2>
          <h5>Description: {details[0].description}</h5>
          <h5>Brand: 
            <p>{details[0].brand.name}</p>
            <img src={details[0].brand.logo_url} alt="" />
          </h5>
          <h6>Price: ${details[0].price}</h6>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
