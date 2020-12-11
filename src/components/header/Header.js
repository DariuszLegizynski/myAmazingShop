import { useContext } from "react";
import { Link } from "react-router-dom";

//styles
import "./Header.css";
import logo from "../../resources/logo/logo.png";

// context
import BasketContext from "../../context/basket/basketContext";

const Header = () => {
	const { basket } = useContext(BasketContext);

	return (
		<header className="header">
			<div className="header__item">
				<Link className="link--logo link" to={"/"}>
					<img
						className="header__item__link__logo"
						src={logo}
						alt="logo"
					/>
				</Link>
				<nav className="header__item__nav">
					<ul>
						<li className="list">
							<Link className="link" to={"/shop"}>
								Shop
							</Link>
						</li>
						<li className="list">
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
			<div className="header__item">
				<ul>
					<li className="list">
						<Link className="link" to={"/signIn"}>
							<button
								className="btn--sign btn"
								tabIndex="-1"
							>
								Sign In
							</button>
						</Link>
					</li>
					<li className="list">
						<Link className="link" to={"/account"}>
							<button
								className="btn--account btn"
								tabIndex="-1"
							>
								Account
							</button>
						</Link>
					</li>
					<li className="list">
						<Link className="link" to={"/"}>
							<button
								className="btn--sign btn"
								tabIndex="-1"
							>
								Sign Out
							</button>
						</Link>
					</li>
					<li className="list">
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
