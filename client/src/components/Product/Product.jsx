import { React } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../actions/actions";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Product({ id, name, image_url, price }) {
  const dispatch = useDispatch();

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
      document.location.reload();
    }
  }
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Button size="small" onClick={(e) => handleDelete(e)}>Delete</Button>
      <CardMedia
        component="img"
        sx={{ pt: "10%" }}
        image={image_url}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h4" component="h2">
          {name}
        </Typography>
        <Typography>${price}</Typography>
      </CardContent>
      <Button size="small">
        <Link to={`/product/${id}`}>View</Link>
      </Button>
    </Card>
  );
}
