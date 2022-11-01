import { useEffect } from "react";
import { getproduct, clearproduct } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getproduct(params.id));
    return () => {
      dispatch(clearproduct());
    };
  }, []);
  return (
    <div className="container">
      <h2>View Product</h2>
      <Link to="/">
        <Button variant="contained" className="my-4">
          Home
        </Button>
      </Link>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.expiryDate}</td>
            <td>{product.costPrice}</td>
            <td>{product.discount}</td>
            <td>{product.discountSellPrice}</td>
            <td>{product.sellPrice}</td>
            <td>{product.finalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;
