import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (user) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
