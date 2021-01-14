import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

//styles
import "./SignIn.css";

const SignIn = () => {
	const {
		user,
		createNewAccount,
		loginUser,
		loginGuest,
	} = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const logIn = (e) => {
		e.preventDefault();
		loginUser(email, password);
	};

	const createNewUser = (e) => {
		e.preventDefault();
		createNewAccount(email, password);
		if (user) {
			history.push("/");
		}
	};

	const loginAsGuest = () => {
		loginGuest();
	};

	const loginSuccess = () => {
		if (user) {
			return user ? (
				<p className="login-page__grid__right__form__p p">
					You are logged in.
				</p>
			) : (
				<p></p>
			);
		}
	};

	const registerSuccess = () => {
		if (user) {
			return user ? (
				<p className="login-page__grid__right__form__p p">
					You have created a new account.
				</p>
			) : (
				<p></p>
			);
		}
	};

	if (user) {
		setTimeout(() => {
			return history.push("/");
		}, 1500);
	}

	return (
		<div className="login-page">
			<div className="login-page__grid">
				<div className="login-page__grid__greeting">
					<h1 className="login-page__grid__greeting__title h1">
						Login to your account
					</h1>
				</div>
				<div className="login-page__grid__right">
					<form className="login-page__grid__right__form">
						<div className="login-page__grid__right__form__field">
							<p className="login-page__grid__right__form__field__title p">
								Email:
							</p>
							<input
								className="login-page__grid__right__form__field__input"
								type="email"
								required="required"
								placeholder="Enter your e-mail"
								value={email}
								onChange={(e) =>
									setEmail(e.target.value)
								}
							/>
						</div>
						<div className="login-page__grid__right__form__field">
							<p className="login-page__grid__right__form__field__password p">
								Password:
							</p>
							<input
								className="login-page__grid__right__form__field__input"
								type="password"
								required="required"
								placeholder="Enter your password"
								value={password}
								onChange={(e) =>
									setPassword(e.target.value)
								}
							/>
						</div>
						<div className="login-page__grid__right__form__login">
							<button
								className="login-page__grid__right__form__login__btn btn--shop btn"
								onClick={logIn}
							>
								<span>Login</span>
							</button>
						</div>
						{loginSuccess()}
						<div className="login-page__grid__right__form__signup">
							<button
								className="login-page__grid__right__form__signup__btn btn btn--item"
								onClick={createNewUser}
							>
								Create Account
							</button>
						</div>
						{registerSuccess()}
					</form>
					<div className="login-page__grid__right__form__signup">
						<button
							className="login-page__grid__right__form__signup__btn btn btn--item btn--demo"
							onClick={loginAsGuest}
						>
							Demo
						</button>
					</div>
				</div>
			</div>
			<Link to={"/"}>
				<p>&larr; BACK</p>
			</Link>
		</div>
	);
};

export default SignIn;
