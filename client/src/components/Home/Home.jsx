import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/actions";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import { Typography, Container, Grid } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (products) {
    return (
      <div>
      <Typography variant="h2">Products</Typography>
       <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4} justifyContent={"center"}>
            {products?.map((el) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={el.id}>
                  <Product
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    image_url={el.image_url}
                    price={el.price}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  } else return <Loading />;
}
