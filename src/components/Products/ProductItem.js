import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  deleteproduct,
  sortProduct,
  filterProducts,
  clearproduct,
} from "../../redux/features/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductItem = ({ products }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteproduct(id));
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSort() {
    dispatch(sortProduct());
  }

  function filterProduct(val) {
    setCategory(val);
  }
  function clearProduct() {
    dispatch(clearproduct());
  }
  return (
    <>
      <h2 className="my-4"> All Products</h2>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="w-100"
        placeholder="search product by name"
      />
      <Button variant="contained" className="my-3" onClick={handleSort}>
        Sort
      </Button>
      <Button variant="contained" className="my-3" onClick={clearProduct}>
        Clear List
      </Button>
      <select
        name=""
        className="my-3 w-50"
        value={category}
        onChange={(e) => filterProduct(e.target.value)}
      >
        <option value="jeans">Jeans</option>
        <option value="shirt">Shirt</option>
      </select>
      <table class="table table-dark w-100">
        <thead>
          <tr>
            <th> Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Expiry Date</th>
            <th>Cost Price</th>
            <th>Sell Price</th>

            <th>Discount %</th>
            <th>Discounted Sell Price</th>
            <th>Final Price</th>
            <th>Action</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {console.log(products)}
          {products.length !== 0 ? (
            products
              .filter(
                (item) => item.category.toLowerCase() == category.toLowerCase()
              )
              .filter((filterProduct) =>
                filterProduct.name.toLowerCase().includes(search.toLowerCase())
              )

              .map((product) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>

                  <td>{product.expiryDate}</td>
                  <td>{product.costPrice}</td>
                  <td>{product.sellPrice}</td>
                  <td>{product.discount}</td>
                  <td>{product.discountSellPrice}</td>

                  <td>{product.finalPrice}</td>
                  <td>
                    {" "}
                    <Button
                      component={Link}
                      to={`/products/${product.id}/edit`}
                      variant="outlined"
                      startIcon={<EditIcon />}
                    >
                      edit
                    </Button>
                    <Button
                      startIcon={<DeleteOutlineIcon />}
                      onClick={() => handleDelete(product.id)}
                    >
                      delete
                    </Button>
                  </td>

                  <td>
                    {" "}
                    <IconButton component={Link} to={`/products/${product.id}`}>
                      <VisibilityIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
          ) : (
            <h3 className=" ">No Products Available</h3>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductItem;
