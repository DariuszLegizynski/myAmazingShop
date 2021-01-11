import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// States
import ProductState from "./context/products/ProductsState";
import BasketState from "./context/basket/BasketState";
import AuthState from "./context/auth/AuthState";

ReactDOM.render(
	<BrowserRouter>
		{/* <React.StrictMode> */}
		<AuthState>
			<ProductState>
				<BasketState>
					<App />
				</BasketState>
			</ProductState>
		</AuthState>
		{/* </React.StrictMode> */}
	</BrowserRouter>,
	document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
