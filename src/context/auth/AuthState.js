import { useReducer, useEffect } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { auth } from "../../firebase/firebase";

import {
	SET_USER,
	ADD_NEW_USER,
	LOGIN_USER,
	LOGOUT_USER,
	LOGIN_ANON,
} from "../types";

const AuthState = (props) => {
	const initialState = {
		user: {},
	};

	const [state, dispatch] = useReducer(
		authReducer,
		initialState
	);

	const loginUser = (email, password) => {
		auth.signInWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({
					type: LOGIN_USER,
					payload: {
						email,
						password,
					},
				});
			})
			.catch((error) => alert(error.message));
	};

	const loginGuest = () => {
		auth.signInAnonymously()
			.then(() => {
				dispatch({
					type: LOGIN_ANON,
				});
			})
			.catch((error) => alert(error.message));
	};

	const createNewAccount = (email, password) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({
					type: ADD_NEW_USER,
					payload: {
						email,
						password,
					},
				});
			})
			.catch((error) => alert(error.message));
	};

	const signOutUser = () => {
		auth.signOut()
			.then(() => {
				dispatch({
					type: LOGOUT_USER,
				});
				localStorage.clear();
			})
			.catch((error) => alert(error.message));
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: SET_USER,
					user: null,
				});
			}
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				createNewAccount,
				loginUser,
				signOutUser,
				loginGuest,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
