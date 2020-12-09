import { Route, Switch, Redirect } from "react-router-dom";
import ProductState from "../context/products/ProductsState";

//layout
import Home from "../layout/home/Home";
import Shop from "../layout/shop/Shop";
import Sign from "../layout/sign/Sign";
import Item from "../layout/item/Item";

//styles
import "./App.css";
import Personal from "../layout/personal/Personal";
import Account from "../layout/account/Account";

function App() {
	return (
		<div className="App">
			<ProductState>
				<Switch>
					<Route exact path={"/"} component={Home} />
					<Route
						exact
						path={"/shop"}
						component={Shop}
					/>
					<Route
						exact
						path={"/sign"}
						component={Sign}
					/>
					<Route
						exact
						path={"/item"}
						component={Item}
					/>
					<Route
						exact
						path={"/personal"}
						component={Personal}
					/>
					<Route
						exact
						path={"/account"}
						component={Account}
					/>
					<Redirect to={"/"} />
				</Switch>
			</ProductState>
		</div>
	);
}

export default App;
