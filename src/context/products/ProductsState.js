import { useReducer, useEffect } from "react";
import { db } from "../../firebase/firebase";
import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";
import {
	SHOW_PRODUCTS,
	// SET_LOADING
} from "../types";

const ProductState = (props) => {
	const initialState = {
		products: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(
		productsReducer,
		initialState
	);

	const showProduct = (data) => {
		dispatch({
			type: SHOW_PRODUCTS,
			payload: data,
		});
	};

	useEffect(() => {
		db.collection("products").onSnapshot((snapshot) => {
			showProduct(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				products: state.products,
				loading: state.loading,
				showProduct,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
};

export default ProductState;
