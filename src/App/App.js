import { Route, Switch, Redirect } from "react-router-dom";
import ProductState from "../context/products/ProductsState";

//layout
import Home from "../layout/home/Home";
import Shop from "../layout/shop/Shop";
import Sign from "../layout/sign/Sign";
import Item from "../layout/item/Item";

//styles
import "./App.css";

function App() {
	return (
		<div className="App">
			<ProductState>
				<Switch>
					<Route path={"/"} component={Home} />
					<Route path={"/shop"} component={Shop} />
					<Route path={"/sign"} component={Sign} />
					<Route path={"/item"} component={Item} />
					<Redirect to={"/"} />
				</Switch>
			</ProductState>
		</div>
	);
}

export default App;
