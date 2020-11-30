import { Link } from "react-router-dom";

import logo from "../../resources/logo/logo.png";

//styles
import "./Header.css";
import icons from "../../resources/icons/icomoon/sprites.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__item">
                <Link className="header__item__link link" to={"/"}>
                    <img className="header__item__link__logo" src={logo} alt="logo" />
                </Link>
                <nav className="header__item__nav">
                    <ul>
                        <li className="list">
                            <Link className="header__item__nav__link link" to={"/"}>
                                Categories
                            </Link>
                        </li>
                        <li className="list">
                            <Link className="header__item__nav__link link" to={"/"}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__item">
                <ul>
                    <li className="list">
                        <Link className="header__item__user__link link__sign-in link" to={"/"}>
                            <button className="btn--sign btn">
                                Sign In
                            </button>
                        </Link>
                    </li>
                    <li className="list">
                        <Link className="header__item__user__link link__sign-in link" to={"/"}>
                            <button className="btn--account btn">
                                Account
                            </button>
                        </Link>
                    </li>
                    <li className="list">
                        <Link className="header__item__user__link link__sign-out link" to={"/"}>
                            <button className="btn--sign btn">
                                Sign Out
                            </button>
                        </Link>
                    </li>
                    <li className="list">
                        <Link className="header__item__link link" to={"/"}>
                            <button className="header__item__btn btn">
                                <svg className="header__item__icon icon">
                                    <use href={icons + "#icon-cart"} />
                                </svg>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;