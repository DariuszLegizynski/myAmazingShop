import {
	SET_USER,
	ADD_NEW_USER,
	LOGIN_USER,
	LOGOUT_USER,
} from "../types";

const authReducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};
		case ADD_NEW_USER:
			return {
				...state,
				user: action.user,
			};
		case LOGIN_USER:
			return {
				...state,
				user: action.user,
			};
		case LOGOUT_USER:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default authReducer;
