import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./theme";

import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/create" component={AddProduct} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/products/:id/edit" component={EditProduct} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
