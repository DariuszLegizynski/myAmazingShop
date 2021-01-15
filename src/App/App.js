import { Route, Switch, Redirect } from "react-router-dom";

//layout
import Home from "../layout/home/Home";
import Shop from "../layout/shop/Shop";
import SignIn from "../layout/signIn/SignIn";
import Item from "../layout/item/Item";
import Payment from "../layout/payment/Payment";
import Personal from "../layout/personal/Personal";
import Account from "../layout/account/Account";

//styles
import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route exact path={"/shop"} component={Shop} />
				<Route
					exact
					path={"/signIn"}
					component={SignIn}
				/>
				<Route
					exact
					path={"/products/:item"}
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
				<Route
					exact
					path={"/payment"}
					component={Payment}
				/>
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
}

export default App;
