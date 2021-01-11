import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
	SET_USER,
	ADD_NEW_USER,
	LOGIN_USER,
	LOGOUT_USER,
} from "../types";

const AuthState = (props) => {
	const initialState = {
		user: {},
	};

	const [state, dispatch] = useReducer(
		authReducer,
		initialState
	);

	const createNewAccount = (email, password) => {
		dispatch({
			type: ADD_NEW_USER,
			payload: {
				email,
				password,
			},
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				createNewAccount,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
