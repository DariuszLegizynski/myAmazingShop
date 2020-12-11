import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// constext
// States
import ProductState from "./context/products/ProductsState";
import BasketState from "./context/basket/BasketState";

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ProductState>
				<BasketState>
					<App />
				</BasketState>
			</ProductState>
		</React.StrictMode>
	</BrowserRouter>,
	document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
