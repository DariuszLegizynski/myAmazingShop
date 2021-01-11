// import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { auth } from "../firebase/firebase";

//layout
import Home from "../layout/home/Home";
import Shop from "../layout/shop/Shop";
import SignIn from "../layout/signIn/SignIn";
import Item from "../layout/item/Item";

//styles
import "./App.css";
import Personal from "../layout/personal/Personal";
import Account from "../layout/account/Account";

function App() {
	// useEffect(() => {
	// 	auth.onAuthStateChanged((authUser) => {
	// 		console.log("The user is: ", authUser);

	// 		if (authUser) {
	// 		} else {
	// 		}
	// 	});
	// }, []);

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
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
}

export default App;
