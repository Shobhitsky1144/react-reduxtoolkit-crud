import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import {
  getproduct,
  clearproduct,
  updateproduct,
} from "../../redux/features/productSlice";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const EditProduct = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      expiryDate: "",
      costPrice: "",
      discount: "",
      discountSellPrice: "",
      sellPrice: "",

      finalPrice: "",
    },
  });

  const params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getproduct(params.id));
    return () => {
      dispatch(clearproduct());
    };
  }, []);

  useEffect(() => {
    reset(product);
  }, [product]);

  const onSubmit = (data) => {
    dispatch(updateproduct(data));
    history.push("/");
  };
  return (
    <div>
      <Paper>
        <h2>Update Product</h2>
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField inputProps={{ type: "hidden" }} margin="normal" />

          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                id="name"
                label="Product Name"
                variant="outlined"
                placeholder="Enter Your Product Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                placeholder="Enter Your Description"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <>
                <InputLabel
                  id="demo-simple-select-label "
                  className="text-light my-2"
                >
                  Category
                </InputLabel>
                <Select
                  id="category"
                  value="category"
                  variant="outlined"
                  label="category"
                  fullWidth
                  margin="normal"
                  {...field}
                >
                  <MenuItem value="jeans">Jeans</MenuItem>
                  <MenuItem value="shirt">Shirt</MenuItem>
                </Select>
              </>
            )}
          />
          <Controller
            control={control}
            name="expiryDate"
            render={({ field }) => (
              <>
                <label className="pt-3">Expiry Date</label>
                <br />
                <input
                  type="date"
                  id="expiryDate"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="costPrice"
            render={({ field }) => (
              <TextField
                id="costPrice"
                label="Cost Price"
                variant="outlined"
                placeholder="Enter Your Cost Price"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="sellPrice"
            render={({ field }) => (
              <TextField
                id="sellPrice"
                label="Sell Price"
                variant="outlined"
                placeholder="Enter Your Sell Price"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="discount"
            render={({ field }) => (
              <TextField
                id="discount"
                label="Discount"
                variant="outlined"
                placeholder="Enter Your Discount"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="discountSellprice"
            render={({ field }) => (
              <TextField
                id="discountSellprice"
                label="Discounted Sell Price"
                variant="outlined"
                placeholder="Enter Your Discounted Sell Price"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="finalPrice"
            render={({ field }) => (
              <TextField
                id="finalPrice"
                label="Final Price"
                variant="outlined"
                placeholder="Enter Your Final Price"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button variant="contained" type="submit">
            Update Product
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditProduct;
