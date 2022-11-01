import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
  },
}));

const Products = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.product.products);

  return (
    <>
      <Grid spacing={2} container>
        <ProductItem products={products} />
      </Grid>
      <Fab
        component={Link}
        to="/products/create"
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Products;
