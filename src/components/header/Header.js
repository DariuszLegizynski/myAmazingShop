import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//components
import Burger from "../burger/Burger";

//styles
import "./Header.css";

// context
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";

const Header = () => {
	const { basket } = useContext(BasketContext);
	const { user, signOutUser } = useContext(AuthContext);

	const [openBurger, setOpenBurger] = useState(false);

	let burgerClass = "";
	if (openBurger) {
		burgerClass = "--open";
	}

	const handleSignOut = () => {
		signOutUser();
	};

	const handleUserBtn = () => {
		if (!user) {
			return (
				<li
					className={`list${burgerClass} fadeInFromTop`}
				>
					<Link className="link" to={"/signIn"}>
						<button
							className="btn--sign btn"
							tabIndex="-1"
						>
							Sign In
						</button>
					</Link>
				</li>
			);
		} else {
			return (
				<>
					<li
						className={`list${burgerClass} fadeInFromTop`}
					>
						<Link className="link" to={"/orders"}>
							<button
								className="btn--account btn"
								tabIndex="-1"
							>
								Orders
							</button>
						</Link>
					</li>
					<li
						className={`list${burgerClass} fadeInFromTop`}
					>
						<Link
							className="link"
							to={"/"}
							onClick={handleSignOut}
						>
							<button
								className="btn--sign btn"
								tabIndex="-1"
							>
								Sign Out
							</button>
						</Link>
					</li>
				</>
			);
		}
	};

	return (
		<header className="header">
			<div className="header__item">
				<div
					className="header__item__navigation"
					onClick={() => setOpenBurger(!openBurger)}
				>
					<Burger burgerClass={burgerClass} />
					<Link className="link--logo link" to={"/"}>
						<img
							className="header__item__navigation__link__logo"
							src="https://i.imgur.com/FArEXrs.png?1"
							alt="logo"
						/>
					</Link>
				</div>
				<nav className="header__item__nav fadeInFromTop">
					<ul>
						<li
							className={`list${burgerClass} fadeInFromTop`}
						>
							<Link className="link" to={"/shop"}>
								Shop
							</Link>
						</li>
						<li
							className={`list${burgerClass} fadeInFromTop`}
						>
							<Link
								className="link"
								to={"/personal"}
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="header__item__greeting fadeInFromTop">
				<p className="header__item__greeting__p p">
					Hello
				</p>
				<p className="header__item__greeting__p p">
					{user ? user.email : "Guest"}
				</p>
			</div>
			<div className="header__item">
				<ul>
					{handleUserBtn()}
					<li className="list--visible fadeInFromTop">
						<Link
							className="link--cart link"
							to={"/account"}
						>
							<button
								className="header__item__btn btn--cart btn"
								tabIndex="-1"
							>
								<span className="header__item__span span">
									{basket.length}
								</span>
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
