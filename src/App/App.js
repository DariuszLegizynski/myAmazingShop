import { Route, Switch, Redirect } from "react-router-dom";

//layout
import Home from "../layout/home/Home";
import Shop from "../layout/shop/Shop";
import SignIn from "../layout/signIn/SignIn";
import Item from "../layout/item/Item";
import Payment from "../layout/payment/Payment";
import Personal from "../layout/personal/Personal";
import Account from "../layout/account/Account";

//Stripes
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//styles
import "./App.css";

const stripePromise = loadStripe(
	"pk_test_51IAiWLJPul52MnZX1sJy8E6ronrwHCOtaeH035A53r2eVzZSJ7ZQoaHZKf8NKLF8nXDIsX8KPPy4D2fIbESe9UAX00YZqmzvXr"
);

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
				<Elements stripe={stripePromise}>
					<Route
						exact
						path={"/payment"}
						component={Payment}
					/>
				</Elements>
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
}

export default App;
