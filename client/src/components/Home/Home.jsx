import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/actions";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (products) {
    return (
      <div>
        <div>
          <h2>Products</h2>
          <div>
            {products?.map((el) => {
              return (
                <div>
                  <Product
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    image_url={el.image_url}
                    price={el.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else return <Loading />;
}
